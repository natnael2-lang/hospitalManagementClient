import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Prescriptions({handlePrescription,prescription,appointmentId}) {
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [pharmacistId, setPharmacyId] = useState('');
  const [quantity, setQuantity] = useState('');

  const [message, setMessage] = useState('');
  const [alreadyPrescribed,setAlreadyPrescribed]=useState(false)


  useEffect(() => {
        async function fetchLabRequest() {
         
          try {
            const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/doctor/prescription`);
            if (response.ok) {
              const data = await response.json();
              console.log("appointment detail data ",data)
              handlePrescription(data.data);
              setAlreadyPrescribed(true)
              return
            } else {
              
              handlePrescription(null);
            }
          } catch (error) {
            console.log("Failed to fetch:", error);
           
         
        }}
    
        if(!prescription){fetchLabRequest()}
        return
      }, [prescription,handlePrescription,appointmentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post(`${process.env.REACT_APP_CURRENT_URL}/doctor/prescription`, {
        medication,
        dosage,
        appointmentId,
        pharmacistId,
        quantity
      },{withCredentials:true});

      if(response.status !==201){handleSubmit()}
       handlePrescription(
        
        {
           medication,
           dosage,
           quantity
    
        }
       
      )

      setMessage('Prescription sent successfully!');
     
      setMedication('');
      setDosage('');
      setPharmacyId('');
      setQuantity("")
    } catch (error) {
      console.error('Error sending prescription:', error);
      setMessage('Failed to send prescription.');
    }
  };

  return (
    <>
    {!alreadyPrescribed? <div label="Prescriptions">
      <h3 className="text-xl font-semibold">Send Prescription</h3>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label className="block mb-1">Medication:</label>
          <input
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1">Dosage:</label>
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1">Quantity:</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1">Pharmacist ID:</label>
          <input
            type="text"
            value={pharmacistId}
            onChange={(e) => setPharmacyId(e.target.value)}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Prescription
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>:<p>already prescribed</p>}
   
    
    </>
    
  );
}

export default Prescriptions;