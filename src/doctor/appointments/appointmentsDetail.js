import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from './tabs';
import MedicalHistory from './components/medicalHistory';
import LabRequests from './components/labRequest';
import Prescriptions from './components/prescription';
import LabResults from './components/labResult';

function AppointmentDetailsPage() {
  const { appointmentId } = useParams();
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [labResults, setLabResults] = useState([]);
  const [prescription, setPrescription] = useState("");
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const handleLabResults = (data) => {
    setLabResults(data);
  };

  const handlePrescription = (medication, dosage) => {
    setPrescription({ medication, dosage });
    handleMedicalDetails();
  };

  const handleMedicalDetails = async () => {
    // Your logic for handling medical details can be implemented here
  };

  useEffect(() => {
    async function fetchAppointmentDetails() {
      setLoading(true); 
      try {
        const response = await fetch(`/appointment/${appointmentId}`);
        if (response.ok) {
          const data = await response.json();
          setAppointmentDetails(data);
        } else {
          setError("Failed to fetch appointment details.");
          setAppointmentDetails(null);
        }
      } catch (error) {
        console.log("Failed to fetch:", error);
        setError("Failed to fetch appointment details.");
      } finally {
        setLoading(false); 
      }
    }

    fetchAppointmentDetails();
  }, [appointmentId]);

  const patientId = appointmentDetails?.appointment?.patientId;
  const doctorId = appointmentDetails?.appointment?.doctorId;

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
      <h3 className="text-lg font-semibold">Appointment Information:</h3>
      {error ? (
        <p>{error}</p> // Error message
      ) : appointmentDetails ? (
        <>
          <p>Date: {new Date(appointmentDetails.appointment.date).toLocaleDateString()}</p>
          <p>Patient: {appointmentDetails.appointment.patient.name}</p>
        </>
      ) : (
        <p>No appointment details available.</p>
      )}

      <Tabs 
        tabs={[
          { label: 'Medical History' },
          { label: 'Lab Requests' },
          { label: 'Prescriptions' },
          { label: 'Lab Results' },
        ]}
      >
        <MedicalHistory patientId={patientId} doctorId={doctorId} />
        <LabRequests patientId={patientId} doctorId={doctorId} />
        <Prescriptions patientId={patientId} doctorId={doctorId} handlePrescription={handlePrescription} />
        <LabResults patientId={patientId} doctorId={doctorId} handleLabResults={handleLabResults} />
      </Tabs>
    </div>
  );
}

export default AppointmentDetailsPage;