import React, { useState } from 'react';
import axios from 'axios';

function Prescriptions({handlePescription}) {
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [pharmacyId, setPharmacyId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('/send-prescription', {
        medication,
        dosage,
      });

      if(!response.ok){handleSubmit()}
       handlePescription(
        
        {
           medication,
           dosage,
    
        }
       
      )

      setMessage('Prescription sent successfully!');
     
      setMedication('');
      setDosage('');
      setPharmacyId('');
    } catch (error) {
      console.error('Error sending prescription:', error);
      setMessage('Failed to send prescription.');
    }
  };

  return (
    <div label="Prescriptions">
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
          <label className="block mb-1">Pharmacy ID:</label>
          <input
            type="text"
            value={pharmacyId}
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
    </div>
  );
}

export default Prescriptions;