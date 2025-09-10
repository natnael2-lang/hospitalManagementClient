import React from "react";
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import "./HomePharma.css";
const PharmaHome = () => {
  

  return (
    <div>
      <div className="hospital-info12">
        <h2> አዲስ ህይወት አጠቃላይ ሆስፒታል</h2>
        <p> we care about you</p>
        </div>


        <div className="pharma-section">
        <div className="myButtonsNav">
          <Link to="/HomeToDo">
            <button className="action-But22">ToDoList</button>
          </Link>
          <Link to="/Medicine">
            <button className="action-But22">medicine</button>
          </Link>
          <Link to="/ProfilePharma">
            <button className="action-But22">Myprofile</button>
          </Link>
          
        </div>
        </div>










        



        
        

      </div>
   


   
  )
}

export default PharmaHome


