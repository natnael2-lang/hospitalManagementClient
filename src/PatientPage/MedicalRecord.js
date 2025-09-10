import React, { useState } from 'react';
import './MedicalRecord.css';
import Navbarp from './NavBarp';

const MedicalRecords = () => {
  // Mock medical records data
  const medicalRecords = {
    imagingResults: [
      { type: '', description: '' },
    ],
    labResults: [
      { testName: '', resultValue: '' },
    ],
    prescriptions: [
      { medication: '', instructions: '' },
    ],
  };

  // State to control the visibility of medical records
  const [showRecords, setShowRecords] = useState(false);

  // Function to toggle visibility of medical records
  const toggleRecordsVisibility = () => {
    setShowRecords(!showRecords);
  };

  return (
    <> <Navbarp />
    <div className='flex justify-center items-center h-screen'> 
    <div className='medical-record-container '>
      <h1 className='record-title'>Medical Records</h1>
  <div className="bull">
      {/* Button to toggle visibility of medical records */}
      <button className ="container mx-auto mt-8" onClick={toggleRecordsVisibility} className='toggle-button'>
        {showRecords ? 'Hide' : 'Show '}
      </button>

      {/* Render medical records if showRecords is true */}
      {showRecords && (
        <div className='records-section '>
          {/* Imaging Results Section */}
          <h2 className='result-title '>Imaging Results</h2>
          <ul className='result-list'>
            {medicalRecords.imagingResults.map((result, index) => (
              <li key={index} className='result-item'>
                {/* Display Type and Description */}
                <strong className='result-label'>Type of image 1:</strong>
                <br className='line-break'></br>
                <textarea className='result-textarea' value={result.type} readOnly />
                <br className='line-break'></br>
                <strong className='result-label'>Description for image 1:</strong>
                <br className='line-break'></br>
                <textarea className='result-textarea' value={result.description} readOnly />
              </li>
            ))}
          </ul>

          {/* Lab Results Section */}
          <h3 className='result-title'>Lab Results</h3>
          <ul>
            {medicalRecords.labResults.map((result, index) => (
              <li className='result-item' key={index}>
                {/* Display Test Name and Result Value */}
                <strong className='result-label'>Test Name 1:</strong>
                <br className='line-break'></br>
                <textarea className='result-textarea' value={result.testName} readOnly />
                <br className='line-break'></br>
                <strong className='result-label'>Result Value for test 1:</strong>
                <br className='line-break'></br>
                <textarea className='result-textarea' value={result.resultValue} readOnly />
              </li>
            ))}
          </ul>

          {/* Prescriptions Section */}
          <h3 className='result-title'>Prescriptions</h3>
          <ul>
            {medicalRecords.prescriptions.map((prescription, index) => (
              <li className='result-item' key={index}>
                {/* Display Medication and Instructions */}
                <strong className='result-label'>Medication 1:</strong>
                <br className='line-break'></br>
                <textarea className='result-textarea' value={prescription.medication} readOnly />
                <br className='line-break'></br>
                <strong className='result-label'>Instructions for medication 1:</strong>
                <br className='line-break'></br>
                <textarea className='result-textarea' value={prescription.instructions} readOnly />
              </li>
            ))}
          </ul>
        </div>
      )}
          </div>
          </div>
        </div> 
      </>
  );
};

export default MedicalRecords;
