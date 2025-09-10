// MedicalHistory.js
import React, { useEffect, useState } from 'react';

function MedicalHistory({ patientId, doctorId }) {
  const [medicalHistory, setMedicalHistory] = useState(null);

  useEffect(() => {
    async function fetchMedicalHistory() {
      const response = await fetch(`/medical-history?patientId=${patientId}&doctorId=${doctorId}`);
      if (response.ok) {
        const data = await response.json();
        setMedicalHistory(data);
      }
    }

    if (patientId && doctorId) {
      fetchMedicalHistory();
    }
  }, [patientId, doctorId]);

  return (
    <div label="Medical History">
      <h3 className="text-lg font-semibold">Medical History</h3>
      {medicalHistory ? (
        <p>{medicalHistory.condition}</p>
      ) : (
        <p>No medical history available.</p>
      )}
    </div>
  );
}

export default MedicalHistory;