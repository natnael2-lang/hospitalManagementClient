import React from "react";

import { Link } from "react-router-dom"; // Import Link component

const Home = () => {
  // You can add any JavaScript logic here if needed

  return (
    <div className="home-page">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/imaging-request">Imaging Request</Link>
          </li>
          <li>
            <Link to="/imaging-result">Imaging result</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="announcement-section">
          <h2>Announcements</h2>
          <div className="announcement-list">
            {/* Announcement items will be dynamically added here */}
          </div>
        </div>
        <div className="todolist-section">
          <h2>To-Do List</h2>
          <div className="todolist">
            {/* To-Do list items will be dynamically added here */}
          </div>
        </div>
      </div>
      <footer>
        &copy; <span id="currentYear"></span> Radiologist Page
      </footer>

      {/* You can include any necessary scripts here */}
    </div>
  );
};

export default Home;
