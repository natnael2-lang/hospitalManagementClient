// Import React library and CSS file for styling
import React, { useState } from 'react';
import axios from 'axios'
import './imaging.css';

// Define MedicalImagingRequest functional component
    const MedicalImagingRequest = () => {
    const [formData, setFormData] = useState({}) // State variable to store form data
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }) // Update state variable when form data changes
    } // Function to update state variable when form data changes

    const handleSubmit = async(e) => { 
        e.preventDefault(); // Prevent default form submission
        await axios.post('/api/doctor_image_request', formData)
  }




    
    // JSX structure for the component
    return (
        <div>
            {/* Header with navigation bar */}
            <header className="navigation-bar">
                <div className="header-content">
                    <a href="/" className="home-link">Home</a> {/* Home link */}
                    <a href="/" className="profile-link">Profile</a> {/* Profile link */}
                </div>
            </header>
            {/* Main container for the form */}
            <div className="container">
                {/* Left column for patient information */}
                <div className="left-column">
                    {/* Form for collecting patient information */}
                    <form >    {/* a post request */}
                   
                        <label htmlFor="patient_name">Patient Name:</label> {/* Label for patient name */}
                        <input onChange = {onChange} type="text" id="patient_name" name="patient_name" required /><br /><br /> {/* Input field for patient name */}
                        
                        <label htmlFor="dob">Date of Birth:</label> {/* Label for date of birth */}
                        <input onChange = {onChange} type="date" id="dob" name="dob" required /><br /><br /> {/* Input field for date of birth */}
                        
                        <label htmlFor="gender">Gender:</label> {/* Label for gender */}
                        <select onChange = {onChange} id="gender" name="gender" required> {/* Dropdown for selecting gender */}
                            <option value="">Select Gender</option> {/* Default option */}
                            <option value="male">Male</option> {/* Option for male */}
                            <option value="female">Female</option> {/* Option for female */}
                        </select><br /><br />

                        <label htmlFor="physician_name">Physician Name:</label> {/* Label for physician name */}
                        <input onChange = {onChange} type="text" id="physician_name" name="physician_name" required /><br /><br /> {/* Input field for physician name */}

                        <label htmlFor="physician_contact">Physician Contact Info:</label> {/* Label for physician contact info */}
                        <input onChange = {onChange} type="text" id="physician_contact" name="physician_contact" required /><br /><br /> {/* Input field for physician contact info */}

                        <label htmlFor="imaging_procedure">Select Imaging Procedure:</label> {/* Label for imaging procedure */}
                        <select onChange = {onChange} id="imaging_procedure" name="imaging_procedure" required> {/* Dropdown for selecting imaging procedure */}
                            <option value="">Select Procedure</option> {/* Default option */}
                            <option value="xray">X-ray</option> {/* Option for X-ray */}
                            <option value="ctscan">CT Scan</option> {/* Option for CT Scan */}
                            <option value="mri">MRI</option> {/* Option for MRI */}
                            <option value="ultrasound">Ultrasound</option> {/* Option for Ultrasound */}
                        </select><br /><br />

                        <label htmlFor="clinical_indication">Clinical Indication:</label> {/* Label for clinical indication */}
                        <textarea onChange = {onChange} id="clinical_indication" name="clinical_indication" rows="4" required></textarea><br /><br /> {/* Textarea for clinical indication */}

                        <label htmlFor="special_instructions">Special Instructions:</label> {/* Label for special instructions */}
                        <textarea onChange = {onChange} id="special_instructions" name="special_instructions" rows="4"></textarea><br /><br /> {/* Textarea for special instructions */}
                        <button onClick = {handleSubmit}>Submit</button>

                    </form>
                
            </div>
        </div>
        </div>
        )};
    

export default MedicalImagingRequest; // Export the MedicalImagingRequest component
