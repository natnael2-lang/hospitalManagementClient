import React, { useState } from 'react';
import './LabTestRequestPage.css';
import axios from 'axios'
function LabTestRequestPage() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientID: '',
    doctorName: '',
    doctorID: '',
    labTestType: '',
    testDate: '',
    urgency: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    for (const key in formData) {
      if (formData[key] === '' && key !== 'urgency') {
        console.error(`${key} is required`);
        return;
      }
    }

    try {
      const response = await axios.post('/api/labTestRequest', formData)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      setPopupMessage(responseData.message);
      setShowPopup(true);
      setFormData({
        patientName: '',
        patientID: '',
        doctorName: '',
        doctorID: '',
        labTestType: '',
        testDate: '',
        urgency: ''
      });

    } catch (error) {
      console.error('Error submitting lab test request:', error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="lab-test-request-page2">
      <h1>Lab Test Request</h1>
      <div className="form-container2">
        <form className="form-left2" onSubmit={handleSubmit}>
          <div className="form-group2">
            <label htmlFor="patientName" className="labelLab">Patient Name</label>
            <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} required />
          </div>
          <div className="form-group2">
            <label htmlFor="patientId" className="labelLab">Patient ID</label>
            <input type="text" id="patientId" name="patientID" value={formData.patientID} onChange={handleChange} required />
          </div>
          <div className="form-group2">
            <label htmlFor="doctorName" className="labelLab">Doctor Name</label>
            <input type="text" id="doctorName" name="doctorName" value={formData.doctorName} onChange={handleChange} required />
          </div>
          <div className="form-group2">
            <label htmlFor="doctorId" className="labelLab">Doctor ID</label>
            <input type="text" id="doctorId" name="doctorID" value={formData.doctorID} onChange={handleChange} required />
          </div>
        </form>
        <form className="form-right2" onSubmit={handleSubmit}>
          <div className="form-group2">
            <label htmlFor="labTestType" className="labelLab">Lab Test Type</label>
            <select id="labTestType" name="labTestType" value={formData.labTestType} onChange={handleChange} required>
              <option value="">Select Lab Test Type</option>
              <option value="bloodTest">Blood Test</option>
              <option value="urineTest">Urine Test</option>
              <option value="xRay">X-Ray</option>
              <option value="mri">MRI</option>
              <option value="ecg">ECG</option>
            </select>
          </div>
          <div className="form-group2">
            <label htmlFor="testDate" className="labelLab">Test Date</label>
            <input type="date" id="testDate" name="testDate" value={formData.testDate} onChange={handleChange} required />
          </div>
          <div className="form-group2">
            <label htmlFor="urgency" className="labelLab">Urgency</label>
            <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange} required>
              <option value="">Select Urgency</option>
              <option value="urgent">Urgent</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          <button type="submit" className="submit-button2">Submit</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>&times;</span>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LabTestRequestPage;
