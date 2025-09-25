import React, { useState } from 'react';
import axios from 'axios';

const initialAppointmentDetails = {
    patientName: '',
    appointmentDate: '',
    case: '',
    username: '',
    speciality: '',
    patientId: '',
};

const AppointmentForm = () => {
    const [appointmentDetails, setAppointmentDetails] = useState(initialAppointmentDetails);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointmentDetails({ ...appointmentDetails, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

       
        if (!appointmentDetails.patientName || !appointmentDetails.patientId || !appointmentDetails.case || !appointmentDetails.appointmentDate) {
            console.log("Please fill in all required fields.");
            return;
        }

        try {
            const result = await axios.post("https://hospitalmanagementserver-nqol.onrender.com/reception/appointments", appointmentDetails);
            if (result.status === 200) { 
                console.log("Appointment submitted");
                setAppointmentDetails(initialAppointmentDetails); 
            }
        } catch (err) {
            console.log("Failed to submit, please try again");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Schedule Appointment</h2>
            <form onSubmit={handleFormSubmit}>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="patientName">Patient Name:</label>
                    <input
                        type="text"
                        id="patientName"
                        name="patientName"
                        value={appointmentDetails.patientName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="patientId">Patient Id:</label>
                    <input
                        type="text"
                        id="patientId"
                        name="patientId"
                        value={appointmentDetails.patientId}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="case">Case:</label>
                    <input
                        type="text"
                        id="case"
                        name="case"
                        value={appointmentDetails.case}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Doctor</label>
                    <select
                        name="speciality" 
                        className="form-select mt-1 block w-full outline-none bg-slate-200"
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select a doctor</option>
                        <option value="DR1001">Eye</option>
                        <option value="DR1002">Breast</option>
                        <option value="DR1003">Surgery</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="appointmentDate">Appointment Date:</label>
                    <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={appointmentDetails.appointmentDate}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200">
                    Schedule Appointment
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;