import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navba">
      <div className="navbar-containe">
        <Link to='/' className="navbar-ite">
          Home
        </Link>
    
        <Link to="/medication-tracking" className="navbar-ite">
          MedicationTracking
        </Link>
        <Link to="/feedback" className="navbar-ite">
          Feedback
        </Link>
        <Link to="/make-appointment" className="navbar-ite">
          Make Appointment
        </Link>
        <Link to="/medical-info" className="navbar-ite">
          Medical-Info
        </Link>
        <Link to="/profile" className="navbar-item profile-link bg-blue-500 text-white px-4 py-2 rounded-lg">
          Profile
        </Link>
        <Link to="/medical" className="navbar-item profile-link bg-blue-500 text-white px-4 py-2 rounded-lg ">
          MedicalRecored
        </Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
