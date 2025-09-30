import React, { useEffect, useState } from 'react';

function MedicalHistory({ patientId }) {
  const [medicalHistory, setMedicalHistory] = useState(null);

  useEffect(() => {
    async function fetchMedicalHistory() {
      if (!patientId) return; 

      const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/doctor/medicalHistory/${patientId}`);
      console.log("Medical History Response:", response);
      if (response.ok) {
        const responseData = await response.json();
        console.log("Fetched Medical History Data:", responseData);
        setMedicalHistory(responseData.data); 
      } else {
        setMedicalHistory(null); 
      }
    }

    fetchMedicalHistory();
  }, [patientId]); 

  return (
    <div label="Medical History">
      <h3 className="text-lg font-semibold">Medical History</h3>
      {medicalHistory && medicalHistory.length > 0 ? (
        medicalHistory.map((history, index) => (
          <div key={index}>
            <p>{history.prescription}</p> {/* Adjust based on actual structure */}
          </div>
        ))
      ) : (
        <p>No medical history available.</p>
      )}
    </div>
  );
}

export default MedicalHistory;