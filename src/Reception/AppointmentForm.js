import React, { useState } from 'react';

const AppointmentForm = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    patientName: '',
    phoneNumber: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: ''
  });
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const doctorAvailable = true; // Replace with actual logic

    const selectedDateTime = new Date(appointmentDetails.appointmentDate + 'T' + appointmentDetails.appointmentTime).getTime();
    const currentDateTime = new Date().getTime();

    if (!appointmentDetails.patientName || !appointmentDetails.phoneNumber || !appointmentDetails.doctorName || !appointmentDetails.appointmentDate || !appointmentDetails.appointmentTime) {
      setError('All fields are required.');
    } else if (selectedDateTime < currentDateTime) {
      setError('Appointment date and time should be in the future.');
    } else if (doctorAvailable) {
      setConfirmationMessage('Appointment scheduled successfully!');
      setError('');
    } else {
      setConfirmationMessage('');
      setError('Sorry, the doctor is not available at the selected time.');
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
          <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={appointmentDetails.phoneNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="doctorName">Doctor Name:</label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={appointmentDetails.doctorName}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="appointmentTime">Appointment Time:</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={appointmentDetails.appointmentTime}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200">
          Schedule Appointment
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {confirmationMessage && <p className="mt-4 text-green-500">{confirmationMessage}</p>}
      </form>
    </div>
  );
};

export default AppointmentForm;