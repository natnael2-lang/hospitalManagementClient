import React, { useState } from 'react';
import axios from 'axios';

const initialAppointmentDetails = {
    patientName: '',
    case: '',
    doctorId: '',
    patientId: '',
    date:''
};

const AppointmentForm = () => {
    const [appointmentDetails, setAppointmentDetails] = useState(initialAppointmentDetails);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointmentDetails({ ...appointmentDetails, [name]: value });
    };

   const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!appointmentDetails.patientName || !appointmentDetails.patientId || !appointmentDetails.case || !appointmentDetails.date) {
        console.log("Please fill in all required fields.");
        return;
    }

    setLoading(true); // Start loading state
    setError(''); // Reset error message

    try {
        const result = await axios.post(`${process.env.REACT_APP_CURRENT_URL}/reception/appointments`, appointmentDetails, {
            withCredentials: true // Ensure cookies are sent
        });

        if (result.status === 202) { 
            console.log("Appointment submitted");
            setAppointmentDetails(initialAppointmentDetails); 
        }
    } catch (err) {
        // Extract a string message from the error response
        const errorMessage = err.response?.data?.message || "Failed to submit, please try again";
        console.error(errorMessage);
        setError(errorMessage); // Set the error message
    } finally {
        setLoading(false); // End loading state
    }
};

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Schedule Appointment</h2>
            <form onSubmit={handleFormSubmit}>
                {error && <p className="text-red-500 mb-4">{error}</p>} {/* Show error message */}
                
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
                        name="doctorId" 
                        className="form-select mt-1 block w-full outline-none bg-slate-200"
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select a doctor</option>
                        <option value="DR1000">Eye</option>
                        <option value="DR1006">Breast</option>
                        <option value="DR1007">Surgery</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="date">Appointment Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={appointmentDetails.date}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className={`w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={loading} // Disable button while loading
                >
                    {loading ? 'Scheduling...' : 'Schedule Appointment'}
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;