// AppointmentDetailsPage.js
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
  const [labResults,setLabResults]=useState([]);
  const[prescription,setPriscription]=useState("");



  const handleLabResults=(data)=>{
            setLabResults(data);
  }

  const handleMedicalDetails=async ()=>{
    
    
  }

  const handlePrescription=( 
       medication,
        dosage)=>{
       setPriscription({medication,dosage})
       handleMedicalDetails();


  }

  useEffect(() => {
    async function fetchAppointmentDetails() {
      const response = await fetch(`/appointment/${appointmentId}`);
      try{
            if (response.ok) {
        const data = await response.json();
        setAppointmentDetails(data);
      } else {
        
        setAppointmentDetails({}); 
        fetchAppointmentDetails();
      }
      }
      catch(error){
               console.log("faild to fatch")
      }
     
    }

    fetchAppointmentDetails();

   
  }, [appointmentId]);
   const patientId = appointmentDetails?.appointment?.patientId;
  const doctorId = appointmentDetails?.appointment?.doctorId;


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
      <h3 className="text-lg font-semibold">Appointment Information:</h3>
      {appointmentDetails ? (
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
        <MedicalHistory patientId={patientId} doctorId={doctorId}  label="Medical History" />
        <LabRequests  patientId={patientId} doctorId={doctorId} label="Lab Requests"/>
        <Prescriptions patientId={patientId} doctorId={doctorId}  handlePrescription={handlePrescription} label="Prescriptions" />
        <LabResults patientId={patientId} doctorId={doctorId}  handleLabResults={handleLabResults}   label="Lab Results"  />
      </Tabs>
    </div>
  );
}

export default AppointmentDetailsPage;