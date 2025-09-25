
import React, { useState } from 'react';
import axios from 'axios'



    const MedicalImagingRequest = () => {
    const [formData, setFormData] = useState({}) 
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }) 
    } 
    const handleSubmit = async(e) => { 
        e.preventDefault(); 
        await axios.post('/api/doctor_image_request', formData)
  }




    
    
    return (
        <div>
          
            <header className="navigation-bar">
                <div className="header-content">
                    <a href="/" className="home-link">Home</a> 
                    <a href="/" className="profile-link">Profile</a> 
                </div>
            </header>
          
            <div className="container">
                
                <div className="left-column">
                    
                    <form >   
                   
                        <label htmlFor="patient_name">Patient Name:</label> 
                        <input onChange = {onChange} type="text" id="patient_name" name="patient_name" required /><br /><br /> 
                        
                        <label htmlFor="dob">Date of Birth:</label> 
                        <input onChange = {onChange} type="date" id="dob" name="dob" required /><br /><br /> 
                        
                        <label htmlFor="gender">Gender:</label> 
                        <select onChange = {onChange} id="gender" name="gender" required> 
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option> 
                        </select><br /><br />

                        <label htmlFor="physician_name">Physician Name:</label> 
                        <input onChange = {onChange} type="text" id="physician_name" name="physician_name" required /><br /><br /> 

                        <label htmlFor="physician_contact">Physician Contact Info:</label> 
                        <input onChange = {onChange} type="text" id="physician_contact" name="physician_contact" required /><br /><br /> 

                        <label htmlFor="imaging_procedure">Select Imaging Procedure:</label> 
                        <select onChange = {onChange} id="imaging_procedure" name="imaging_procedure" required> 
                            <option value="">Select Procedure</option>
                            <option value="xray">X-ray</option> 
                            <option value="ctscan">CT Scan</option> 
                            <option value="mri">MRI</option> 
                            <option value="ultrasound">Ultrasound</option> 
                        </select><br /><br />

                        <label htmlFor="clinical_indication">Clinical Indication:</label>
                        <textarea onChange = {onChange} id="clinical_indication" name="clinical_indication" rows="4" required></textarea><br /><br />

                        <label htmlFor="special_instructions">Special Instructions:</label> 
                        <textarea onChange = {onChange} id="special_instructions" name="special_instructions" rows="4"></textarea><br /><br /> 

                    </form>
                
            </div>
        </div>
        </div>
        )};
    

export default MedicalImagingRequest; 
