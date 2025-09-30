import React, { useState, useEffect } from 'react';
import Hematology from '../forms/hematology';
import axios from 'axios';

function LabRequests({ appointmentId, labRequest, handleLabRequest}) {
  const [alreadyRequested, setAlreadyRequested] = useState(false);
  const [loading, setLoading] = useState(true);
  const [requestDetails, setRequestDetails] = useState(null);
  const [error, setError] = useState(null); // Added error state
useEffect(() => {
  const fetchLabRequest = async () => {
    console.log("Fetching lab request...");
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_CURRENT_URL}/doctor/labRequest/${appointmentId}`, { withCredentials: true });
      if (data) {
        handleLabRequest(data); // Update labRequest state
        setAlreadyRequested(true);
        setRequestDetails(data);
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      setError('Failed to fetch lab request.');
    } finally {
      setLoading(false);
    }
  };

  if (!labRequest) {
    fetchLabRequest(); // Fetch only if labRequest is null
  } else {
    console.log("Existing lab request: ", labRequest);
    setAlreadyRequested(true);
    setRequestDetails(labRequest);
    setLoading(false);
  }
}, [appointmentId,handleLabRequest,labRequest]);

  const handleForm = async (data) => {
    const requestData = { ...data, appointmentId };
    try {
      const response = await axios.post(`${process.env.REACT_APP_CURRENT_URL}/doctor/labRequest/${appointmentId}`, requestData, { withCredentials: true });
      handleLabRequest(response.data.data);
      setAlreadyRequested(true);
      setRequestDetails(response.data.data);
    } catch (error) {
      console.error('Error submitting lab request:', error);
      setError('Failed to submit lab request.'); 
    }
  };

  if (loading) return <p>Loading lab request...</p>;

  return (
    <div label="Lab Requests">
      <h3 className="text-lg font-semibold">Lab Requests</h3>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      {!alreadyRequested ? (
        <Hematology handleForm={handleForm} />
      ) : (
        <div>
          <p>Already requested:</p>
          {requestDetails && (
            <div>
              <p>Status: {requestDetails.status}</p>
              <p>Request Date: {new Date(requestDetails.requestDate).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LabRequests;