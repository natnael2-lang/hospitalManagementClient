import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LabResults({handleLabResults,appointmentId,labResults}) {

  useEffect(() => {
    const fetchLabResults = async () => {
      try {
        const response = await axios.get(`/labRequests/${appointmentId}`, {
          params: {
        
            status: 'completed', 
          },
         
        });

        if(!response.ok){  fetchLabResults();}
        handleLabResults(response)


        
    
      } catch (error) {
        console.error('Failed to fetch lab results:');
      }
    };

  
  }, []);

  return (
    <div label="Lab Results">
      <h3 className="text-lg font-semibold">Lab Results</h3>
      { labResults && labResults.length > 0 ? (
        labResults.map(labResult => (
          <div key={labResult._id} className="mb-2 flex justify-between">
            <p className="font-semibold">Test: {labResult.test}</p>
            <p className="font-semibold">Result: {labResult.result}</p>
            <p>Date: {new Date(labResult.date).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No lab results available.</p>
      )}
    </div>
  );
}

export default LabResults;