import React, { useState } from 'react';
import All_Prescription from '../Drug';
import Item from '../Item/Item';
import Video from '../presvideo.mp4';
import Navbarp from '../NavBarp';
import './Medication.css'; // Import the CSS file

const Medication = () => {
  // State to manage whether prescription records are shown or hidden
  const [showPrescription, setShowPrescription] = useState(false);

  // Function to toggle the visibility of prescription records
  const togglePrescription = () => {
    setShowPrescription(!showPrescription);
  };

  return (
    <>
      <Navbarp />
      <div className="containermed bg-white">
        <div className="newcollection">
          <h1 className="medicationstore text-black">"Welcome to Your Medication Prescription History"</h1>
          <hr className="medhr" />
          <div className="Medication-container">
            {showPrescription ? (
              All_Prescription.map((item, i) => (
                <Item
                  key={i}
                  prescId={item.prescId}
                  prescDate={item.prescDate}
                  patientName={item.patientName}
                  age={item.age}
                  Gender={item.Gender}
                  patientPhone={item.patientPhone}
                  medicationName={item.medicationName}
                  purpose={item.purpose}
                  dosage={item.dosage}
                  frequency={item.frequency}
                  physicianName={item.physicianName}
                  physicianEmail={item.physicianEmail}
                  physicianPhone={item.physicianPhone}
                />
              ))
            ) : (
              <div>
                <p className="p">Dear patient, welcome to your prescription records. 
                  You can access all your records by clicking the "Show Prescription" button below. 
                  We understand that managing your medication is crucial for your well-being
                </p>
                <div className="advert">
                  <video src={Video} loop muted autoPlay />
                </div>
              </div>
            )}
          </div>

          <button className="showbtn" onClick={togglePrescription}>
            {showPrescription ? 'Hide Prescriptions' : 'Show Prescriptions'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Medication;
