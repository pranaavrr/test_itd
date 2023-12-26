const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const formidable = require('formidable');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const Seller = require('./routes/seller'); 
const Customer = require('./routes/customer');

const adminRouter = require('./routes/admin');

const app = express();
const port = 3000;

const jwtSecret = 'shhhhh';

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/project', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!!');
  })
  .catch((error) => {
    console.error('Error in Connection!!', error);
  });

const userSchema = new mongoose.Schema({
  firstname: { type: String, default: '' },
  lastname: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date },
});

const User = mongoose.model('User', userSchema);

// Registration Endpoint
app.post('/register', async (req, res) => {
  try {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      const { firstname, lastname, email, password } = fields;

      if (!(firstname && lastname && email && password)) {
        return res.status(400).send('Enter all the Credentials!!');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      newUser.save()
        .then((user) => {
          res.status(201).send('Registration successful');
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send('Internal Server Error');
        });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Login Endpoint

app.post('/login', async (req, res) => {

  
  try {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      const { email, password } = fields;

      // Find the user in the database
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).send('Invalid username or password');
      }

      

      const passwordMatch = await bcrypt.compare(password, user.password);

      

      if (passwordMatch) {
        // Generate a JWT token
        
        const token = jwt.sign({ email: user.email }, jwtSecret, { expiresIn: '1h' });
       

        res.status(200).json({ token });
      } else {
        res.status(401).send('Invalid username or password');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('No token provided');
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).send('Failed to authenticate token');
    }

    req.firstname = decoded.firstname;
    next();
  });
};

// Example protected route
app.get('/profile', verifyToken, (req, res) => {
  res.status(200).send(`Hello, ${req.firstname}!`);
});

// Forgot Password Endpoint
app.post('/forgot-password', async (req, res) => {
  try {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      const { email } = fields;

      // Find the user in the database
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).send('User not found');
      }

      // Generate reset token and expiry
      const resetToken = crypto.randomBytes(20).toString('hex');
      const resetTokenExpiry = Date.now() + 3600000; // Token expires in 1 hour

      // Update user with reset token and expiry
      await User.findByIdAndUpdate(user._id, { resetToken, resetTokenExpiry });

      const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

      // Send password reset email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'itd7557@gmail.com', // Replace with your email
          pass: 'Pranaav@7447', // Replace with your email password
        },
      });

      const mailOptions = {
        from: 'itd7557@gmail.com', // Replace with your email
        to: user.email,
        subject: 'Password Reset Request',
        html: `Click <a href="${resetLink}">here</a> to reset your password.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Password reset email sent');
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Reset Password Endpoint
app.post('/reset-password', async (req, res) => {
  try {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      const { token, newPassword } = fields;

      // Find the user with the reset token and not expired
      const user = await User.findOne({
        resetToken: token,
        resetTokenExpiry: { $gt: Date.now() },
      });

      if (!user) {
        return res.status(401).send('Invalid or expired token');
      }

      // Update password
      user.password = await bcrypt.hash(newPassword, 10);
      user.resetToken = undefined;
      user.resetTokenExpiry = undefined;

      await user.save();

      res.status(200).send('Password reset successful');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.use('/customer', Customer);
app.use('/seller', Seller);
app.use('/admin', adminRouter);


// Function to initialize the seller's database with 100 products
const initializeSellerDatabase = async () => {
  const seller = new Seller({
    name: 'Sample Seller',
    products: [],
  });

  // Add 100 products to the seller's database
  for (let i = 1; i <= 100; i++) {
    seller.products.push({
      name: `Product ${i}`,
      quantity: 100, // Initial quantity for each product
      price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
    });
  }

  
  await seller.save();
  
};

// Function to simulate a customer purchasing a product
const purchaseProduct = async (customerId, productId, quantity) => {
  try {
    // Find the customer and the seller
    const customer = await Customer.findById(customerId);
    const seller = await Seller.findOne({ 'products._id': productId });

    if (!customer || !seller) {
      console.log('Customer or seller not found.');
      return;
    }

    
    const productInSeller = seller.products.find((product) => product._id.equals(productId));

    if (!productInSeller || productInSeller.quantity < quantity) {
      console.log('Product not available in sufficient quantity.');
      return;
    }

    
    productInSeller.quantity -= quantity;

    
    customer.purchasedProducts.push({
      productId: productId,
      quantity: quantity,
      price: productInSeller.price,
    });

    
    await Promise.all([customer.save(), seller.save()]);

    console.log(`Customer ${customerId} purchased ${quantity} units of Product ${productId}.`);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

initializeSellerDatabase();


const customerId = 'yourCustomerId'; // Replace with actual customer ID
const productId = 'yourProductId'; // Replace with actual product ID
const purchaseQuantity = 5;

purchaseProduct(customerId, productId, purchaseQuantity);

//cart schema

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [cartItemSchema],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  subcategories: [{ type: String }],
});

const Category = mongoose.model('Category', categorySchema);

app.get('/', (req, res) => {
  res.render('order');
});

// Handle order placement
app.post('/place', async (req, res) => {
  try {
    const { address, orderDetails } = req.body;

    // Create a new order
    const newOrder = new Order({ address, orderDetails });

    // Save the order to the database
    await newOrder.save();

    res.send('Order placed successfully!');
  } catch (error) {
    console.error('Error placing order:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});