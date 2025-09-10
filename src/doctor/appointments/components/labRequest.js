import React, { useState } from 'react';
import axios from 'axios';
import Hematology from '../forms/hematology';

function LabRequests() {
  const [labRequests, setLabRequests] = useState({});
  





  const handleForm=(data)=>{
    
    setLabRequests(data);
    handleLabRequest()
  };

  const handleLabRequest=async()=>{
    try {
    const response = await axios.post(`/api/lab-requests`,labRequests);
    console.log('Lab request submitted:', response.data);
    if(!response.ok){
      handleLabRequest()
    }
    return;

  } 
  catch (error) {
    console.error('Error submitting lab request:', error);
  }
  }

  return (
    <div label="Lab Requests">
      <h3 className="text-lg font-semibold">Lab Requests</h3>
      <Hematology handleForm={handleForm}/>
    </div>

  );
}

export default LabRequests;