
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());



mongoose.connect('mongodb://0.0.0.0:27017/project', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!!');
  })
  .catch((error) => {
    console.error('Error in Connection!!', error);
  });


const userSchema = new mongoose.Schema({
  firstname: {type: String, default : ""},
  lastname: {type: String, default : ""},
  email: {type: String, default : ""},
  password: {type: String, default : ""}
});

const User = mongoose.model('User', userSchema);

// JWT Secret Key (change this to a secret key of your choice)
//const jwtSecret = 'your_jwt_secret_key';

// Registration Endpoint
app.post('/register', async (req, res) => {
 try{
    const {firstname, lastname, email, password } = req.fields;
if(! (firstname && lastname && email && password )) {
  res.status(400).send("Enter all the Credentials!!")
}
else{
  res.send(req.fields) 
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
    newUser.save((err, user) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(201).send('Registration successful');
      }
    });
  }catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// // // Login Endpoint
// // app.post('/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.fields;

// //     // Find the user in the database
// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       res.status(401).send('Invalid username or password');
// //       return;
// //     }

// //     // Compare the provided password with the stored hash
// //     const passwordMatch = await bcrypt.compare(password, user.password);

// //     if (passwordMatch) {
// //       // Generate a JWT token
// //       const token = jwt.sign({ username: user.username }, jwtSecret, { expiresIn: '1h' });

// //       res.status(200).json({ token });
// //     } else {
// //       res.status(401).send('Invalid username or password');
// //     }
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// // // // Middleware to verify JWT token
// // // const verifyToken = (req, res, next) => {
// // //   const token = req.headers['authorization'];

// // //   if (!token) {
// // //     return res.status(403).send('No token provided');
// // //   }

// // //   jwt.verify(token, jwtSecret, (err, decoded) => {
// // //     if (err) {
// // //       return res.status(401).send('Failed to authenticate token');
// // //     }

// // //     req.username = decoded.username;
// // //     next();
// // //   });
// // // };

// // // Example protected route
// // app.get('/profile', verifyToken, (req, res) => {
// //   res.status(200).send(`Hello, ${req.username}!`);
// // });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});