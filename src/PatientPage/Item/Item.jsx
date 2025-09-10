import React from 'react';
import './Item.css';

// Item component receives props to display prescription details
const Item = (props) => {
  return (
    <div className='item'>
       <h1>SECE Comprehensive Specialized Hospital</h1>
       <div className="top">
           <div className="topleft">
            <h3 className="prescriptionId">Prescription Id: {props.prescId}</h3>
           </div>
           <div className="topright">
             <p className="prescDate">Prescription Date: {props.prescDate}</p>
           </div>
       </div>
       <div className="center">
          <div>
           <div className="patientinfo">
             <h4>Patient Information:</h4>
              <div></div>
            </div>
            <div className="centerleft">
               <p className="patientName">Patient Name: {props.patientName}</p>
               <p className="patientAge">Age: {props.age}</p>
               <p className="gender">Sex: {props.Gender}</p>
               <p className="patientPhone">Phone: {props.patientPhone}</p>
            </div>
          </div>
          <div>
          <div className="medicationinfo">
            <h4>Medication Information:</h4>
            <div></div>
           </div>
           <div className="centerbuttomright">
                <p className="medicationName">Medication Name: {props.medicationName}</p>
                <p className="usage">Purpose: {props.purpose}</p>
            </div>
            <div className="centerbuttomleft">
                <p className="dosage">Dosage: {props.dosage}</p>
                <p className="frequency">Frequency: {props.frequency}</p>
            </div>
         </div>
       </div>
       <div className="buttom">
         <div className="physicianinfo">
            <p className="physicianName">Physician Name: {props.physicianName}</p>
            <p className="physicianEmail">Email: {props.physicianEmail}</p>
            <p className="physicianPhone">Phone: {props.Phone}</p>
          </div>
       </div>
    </div>
  );
};

export default Item;