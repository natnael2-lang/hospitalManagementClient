import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from './tabs';
import MedicalHistory from './components/medicalHistory';
import LabRequests from './components/labRequest';
import Prescriptions from './components/prescription';
import LabResults from './components/labResult';

const AppointmentDetailsPage = () => {
  const { appointmentId } = useParams();
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [labRequest, setLabRequest] = useState(null);
  const [labResult, setLabResult] = useState(null);
  const [prescription,setPrescription]=useState(null)

  const handleLabRequest = (data) => {
    console.log("Updating labRequest with data:", data);
    setLabRequest(data);
  };

  const handleLabResult = (data) => {
    setLabResult(data);
  };
  const handlePrescription=(data)=>{
          setPrescription(data)
  }

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/doctor/appointments/${appointmentId}`);
        if (!response.ok) throw new Error('Failed to fetch appointment details.');
        
        const data = await response.json();
        setAppointmentDetails(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentDetails();
  }, [appointmentId]);

  if (loading) return <p>Loading...</p>;

  const patientId = appointmentDetails?.patientId;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
      <h3 className="text-lg font-semibold">Appointment Information:</h3>
      {error ? <p>{error}</p> : (
        appointmentDetails ? (
          <>
            <p>Date: {new Date(appointmentDetails.date).toLocaleDateString()}</p>
            <p>Patient: {appointmentDetails.patientName}</p>
          </>
        ) : <p>No appointment details available.</p>
      )}

      <Tabs 
        tabs={[
          { label: 'Medical History' },
          { label: 'Lab Requests' },
          { label: 'Prescriptions' },
          { label: 'Lab Results' },
        ]}
      >
        <MedicalHistory patientId={patientId} label="Medical History" />
        <LabRequests 
          appointmentId={appointmentId} 
          handleLabRequest={handleLabRequest} 
          labRequest={labRequest} 
          label="Lab Requests" 
        />
        <Prescriptions appointmentId={appointmentId} patientId={patientId} handlePrescription={handlePrescription} prescription={prescription} label="Prescriptions" />
        <LabResults  
          handleLabResult={handleLabResult} 
          labResult={labResult} 
          labRequest={labRequest} // Ensure labRequest is passed here
          label="Lab Results" 
        />
      </Tabs>
    </div>
  );
};
export default AppointmentDetailsPage;