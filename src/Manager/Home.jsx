import React from 'react';
import { Link } from 'react-router-dom';

import './HomeM.css';
import Navbar from './Navbar';

const Home = () => {
  return (<>
    <Navbar/>
    <div className="home-container">
      <div className="home-content">
        <div className="home-inner-container">
          <h1 className="home-titleM">
            Welcome, Hospital Manager!
          </h1>
          <p className="home-subtitle">
            Here are some important statistics and updates:
          </p>

          <div className="home-grid">
            <div className="home-content-box">
              <Link className="home-link-text" to='/patient-addmision'>Patient Admissions</Link>
            </div>
            <div className="home-content-box">
              <Link className="home-link-text" to='/staff'>Staffing Overview</Link>
            </div>
            <div className="home-content-box">
              <Link className="home-link-text" to='/finance'>Financial Information</Link>
            </div>
            <div className="home-content-box">
              <Link className="home-link-text" to='/kpi'>Key Performance Indicators</Link>
            </div>
            <div className="home-content-box">
              <Link className="home-link-text" to='/events'>coming Events and Announcements</Link>
            </div>
            <div className="home-content-box">
              <Link className="home-link-text" to='/feedback'>Patient Feedback and Testimonials:</Link>
            </div>
            <div className="home-content-box">
              <Link className="home-link-text" to='/res'>Resource Library</Link>
            </div>
            <div className="home-content-box">
              <Link className="home-link-text" to='/not'>Notification Center:</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
