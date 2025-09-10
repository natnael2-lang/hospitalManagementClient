
import React, { useState, useEffect,useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

   // Function to handle changes in the dropdown
   const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  return (
    <div style={{ display: 'flex', backgroundColor: 'white' , color:"black" }}>
      <ul style={{ listStyleType: 'none', display: 'flex', position: "sticky", flexDirection: 'column', marginLeft:'1%' ,padding:'10px' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/salary-payment">Pay Salary</Link>
        </li>

        <li style={{ marginRight: '20px' }}>
          <Link to="/pay-expense">Pay Expense</Link>
        </li>

        <li style={{ marginRight: '20px' }}>
          <Link  to="/sold-products">Sold Products</Link>
        </li>
        
        <li style={{ marginRight: '20px' }}>
          <Link to="/hospitalService">Given Services</Link>
        </li>        
      
        <li style={{ marginRight: '20px' }}><Link to="/overview">Finance Overview</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/expense">Hospital Expenses Report</Link></li>
        <li ><Link to="/revenue">Hospital Revenue Report</Link></li>
          
        

        
      </ul>
    </div>
  );
}

export default Navbar;
