import React, { useState } from 'react';
import { FcManager } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="navbar-logo">
            <FcManager className="navbar-logo-icon" />
            <span className="navbar-title">MANAGER DASHBOARD</span>
          </div>
          <div className="navbar-links">
            <Link to="/minihome" className="navbar-link">Home</Link>
            <Link to="/account" className="navbar-link">Account</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
