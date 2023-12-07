import React from "react";
import "./App.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="bg-gradient-to-r from-[#fbbf24] to-[#ea580c] flex justify-between">
        {/* Logo and Company Name on the left end */}
        <div className="">
          <img
            src="path/to/your/logo.png"
            alt="Company Logo"
            className="company-logo"
          />
          <h1 className="flex gap left-3">
            {" "}
            <strong>Dream Technologies</strong>
          </h1>
        </div>

        <div className="flex gap-3">
          {/* Search bar in the center */}
          <div className="bg-white rounded-3xl p-0 opacity-75 ">
            <input type="text" placeholder="Search..." />
            <button className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          {/* Logos for Home and Admin on the right end */}
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>

            <select className="text-black" name="" id="">
              <option value="🇺🇸🇺🇸 English">English</option>
              <option value={"Spanish"}>Spanish</option>
              <option value={"German"}>German</option>
              <option value={"French"}>French</option>
            </select>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <section className="content">
        {" "}
        {/* White boxes with content */}
        <div className="white-box">
          {/* Your content goes here */}
          <div className="profile-picture">
            <img
              src="path/to/your/profile-picture.jpg" // Replace with the actual path to your image
              alt="Profile"
              className="profile-image"
            />
          </div>
          <p>
            {" "}
            <strong>Welcome, Your Name</strong>
          </p>
          <p color=""> Monday, 20-03-2023 </p>
        </div>
      </section>
      <div className="flex gap-3 justify-evenly">
        <section className="left-panel">
          <h1>
            {" "}
            <strong>TODAY </strong>
          </h1>
          <section className="container1">
            <div className="card1">
              <p class="text-orange-600">Richard Miles is Off sick today </p>
            </div>
          </section>

          <section className="container1">
            {" "}
            <div className="card2 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>

              <span>You are away today</span>
            </div>
          </section>

          <section className="container1">
            <div className="card3 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>

              <span>You are working from home today </span>
            </div>
          </section>

          <h1>
            {" "}
            <strong>TOMORROW </strong>
          </h1>

          <section className="container1">
            <div className="card1 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>

              <span>2 people will be away tomorrow</span>
            </div>
          </section>

          <h1>
            {" "}
            <strong>NEXT SEVEN DAYS</strong>{" "}
          </h1>

          <section className="container1">
            {" "}
            <div className="card2 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>

              <span>2 people are going to be away</span>
            </div>
          </section>

          <section className="container1">
            {" "}
            <div className="card2 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>

              <span>Your first day is going to be on Thursday</span>
            </div>
          </section>

          <section className="container1">
            {" "}
            <div className="card2 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <span>Its Spring Bank holiday on Monday</span>
            </div>
          </section>
        </section>
        <section className="right-panel">
          <h1>
            <strong> PROJECTS </strong>
          </h1>

          <div className="flex-container">
      <div className="flex-box">
       
        <h2 className="flex gap-2 justify-center"><strong> 71 </strong></h2>
        <p className="flex gap-2 justify-center">TOTAL TASKS</p>
      </div>
      <div className="flex-box">
        
        <h2 className="flex gap-2 justify-center"><strong> 14 </strong></h2>
        <p className="flex gap-2 justify-center">PENDING TASKS</p>
      </div>
      <div className="bottom-flex-box">
       
        <h2 className="flex gap-2 justify-center"><strong>2</strong></h2>
        <p className="flex gap-2 justify-center">Current Projects</p>
      </div>
    </div>
    <h1>
            <strong> YOUR LEAVE </strong>
          </h1>
    <div className="flex-container">
      <div className="flex-box">
       
        <h2 className="flex gap-2 justify-center"><strong> 4.5 </strong></h2>
        <p className="flex gap-2 justify-center">LEAVES TAKEN</p>
      </div>
      <div className="flex-box">
        
        <h2 className="flex gap-2 justify-center"><strong> 12 </strong></h2>
        <p className="flex gap-2 justify-center">REMAINING</p>
      </div>
      <div className="bottom-flex-box">
      
        <div className="flex gap-2 justify-center">  <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
  Apply Leave
</button></div>
      </div>
    </div>

    <h1>
            <strong> YOUR TIME OFF-ALLOWANCE </strong>
          </h1>
    <div className="flex-container">
  
      <div className="flex-box">
       
        <h2 className="flex gap-2 justify-center"> <strong> 5.0 Hours </strong></h2>
        <p className="flex gap-2 justify-center">APPROVED</p>
      </div>
      <div className="flex-box">
        
        <h2 className="flex gap-2 justify-center"> <strong> 15 </strong></h2>
        <p className="flex gap-2 justify-center">REMAINING</p>
      </div>
      <div className="bottom-flex-box">
       
        <div className="flex gap-2 justify-center"><button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
  Apply Time-off
</button></div>
      </div>
    </div>
        

          <h1>
            <strong>UPCOMING HOLIDAYS </strong>
          </h1>
          <section className="projectsbar">
          <div className="bottom-flex-box">
          <p className="flex gap-2 justify-center">Mon 20 May 2023 - Ramzan</p>
          </div>
          </section>
          
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
