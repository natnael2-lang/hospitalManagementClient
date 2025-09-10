import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SoldProduct from "./SoldProduct"; 
import EmployeeTable from "./EmployeeTable"; 
import HospitalService from "./HospitalService"; 
import Expense from "./Expense";
import Revenue from "./Revenue";
import Overview from "./Overview";
import PayExpense from "./PayExpense";
import logo from './logo.png';

const FinanceHome = () => {
  return (
    
    <div>
    <div>  <hr style={{marginLeft: '10%' , border: '3px solid black' }}/> </div>
    <div style={{display:'flex'}}>
    <img src={logo} alt="Logo" style={{width:'100px',alignSelf:'center'}}/>
    <h1 style={{marginLeft:'30%',fontSize:72, fontWeight:'bolder'}}> Tina Hospital</h1>
    </div>
    <div>  <hr style={{marginLeft: '10%' , border: '3px solid black' }}/> {/* Horizontal rule */}</div>
      <div> <h1 style={{fontSize:60,textAlign:'center', fontWeight:'bolder'}}> Finance </h1></div>
    </div>
      
   
  );
}

export default FinanceHome;
