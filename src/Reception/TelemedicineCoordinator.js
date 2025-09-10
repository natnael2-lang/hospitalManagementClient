import React, { useState } from 'react';

const TelemedicineAppointmentForm = () => {
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
    // Simulate checking doctor availability
    const doctorAvailable = true; // Replace with actual logic

    const selectedDateTime = new Date(appointmentDetails.appointmentDate + 'T' + appointmentDetails.appointmentTime).getTime();
    const currentDateTime = new Date().getTime();

    if (!appointmentDetails.patientName || !appointmentDetails.phoneNumber || !appointmentDetails.doctorName || !appointmentDetails.appointmentDate || !appointmentDetails.appointmentTime) {
      setError('All fields are required.');
    } else if (selectedDateTime < currentDateTime) {
      setError('Appointment date and time should be in the future.');
    } else if (doctorAvailable) {
      setConfirmationMessage('Telemedicine appointment scheduled successfully!');
      setError('');
    } else {
      setConfirmationMessage('');
      setError('Sorry, the doctor is not available at the selected time.');
    }
  };

  return (
    React.createElement('div', null,
      React.createElement('h2', null, 'Schedule Telemedicine Appointment'),
      React.createElement('form', { onSubmit: handleFormSubmit },
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'patientName' }, 'Patient Name:'),
          React.createElement('input', {
            type: 'text',
            id: 'patientName',
            name: 'patientName',
            value: appointmentDetails.patientName,
            onChange: handleInputChange
          })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'phoneNumber' }, 'Phone Number:'),
          React.createElement('input', {
            type: 'text',
            id: 'phoneNumber',
            name: 'phoneNumber',
            value: appointmentDetails.phoneNumber,
            onChange: handleInputChange
          })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'doctorName' }, 'Doctor Name:'),
          React.createElement('input', {
            type: 'text',
            id: 'doctorName',
            name: 'doctorName',
            value: appointmentDetails.doctorName,
            onChange: handleInputChange
          })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'appointmentDate' }, 'Appointment Date:'),
          React.createElement('input', {
            type: 'date',
            id: 'appointmentDate',
            name: 'appointmentDate',
            value: appointmentDetails.appointmentDate,
            onChange: handleInputChange
          })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'appointmentTime' }, 'Appointment Time:'),
          React.createElement('input', {
            type: 'time',
            id: 'appointmentTime',
            name: 'appointmentTime',
            value: appointmentDetails.appointmentTime,
            onChange: handleInputChange
          })
        ),
        React.createElement('button', { type: 'submit' }, 'Schedule Telemedicine Appointment'),
        error && React.createElement('p', { style: { color: 'red' } }, error),
        confirmationMessage && React.createElement('p', { style: { color: 'green' } }, confirmationMessage)
      )
    )
  );
};

export default TelemedicineAppointmentForm;
