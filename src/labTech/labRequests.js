import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LabTechnician = () => {
  const [labRequests, setLabRequests] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [results, setResults] = useState({});
  const { labTechId } = useParams();

  useEffect(() => {
    fetchLabRequests();

   
    const intervalId = setInterval(fetchLabRequests, 5000);

    
    return () => clearInterval(intervalId);
  }, []);

  const fetchLabRequests = async () => {
    try {
      const response = await axios.get('/api/lab-requests?status=pending');
      setLabRequests(response.data);
    } catch (error) {
      console.error('Error fetching lab requests:', error);
    }
  };

  const handleInputChange = (testName, value) => {
    setResults((prev) => ({
      ...prev,
      [testName]: value,
    }));
  };

  const handleSubmit = async () => {
    const requestData = {
      results,
    };

    try {
      await axios.patch(`/api/lab-requests/${currentRequest._id}`, requestData);
      console.log('Results submitted for request:', currentRequest._id);
      setModalOpen(false);
      setResults({});
      fetchLabRequests(); 
    } catch (error) {
      console.error('Error submitting results:', error.response ? error.response.data : error.message);
    }
  };

  const openModal = (request) => {
    setCurrentRequest(request);
    setResults({});
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentRequest(null);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Lab Requests</h2>
      {labRequests.map((request) => (
        <div key={request._id} className="mb-6">
          <h3 className="font-semibold">{`Patient ID: ${request.patientId}`}</h3>
          <button
            onClick={() => openModal(request)}
            className="mt-2 text-blue-600 hover:underline"
          >
            View Tests
          </button>
        </div>
      ))}

      {modalOpen && currentRequest && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold mb-4">{`Tests for Patient ID: ${currentRequest.patientId}`}</h3>
            {currentRequest.tests.map((test) => (
              <div key={test.name} className="flex items-center mb-2">
                <label className="mr-2">{test.name}:</label>
                <input
                  type="text"
                  placeholder="Enter result"
                  value={results[test.name] || ''} 
                  onChange={(e) => handleInputChange(test.name, e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                />
              </div>
            ))}
            <div>

                 <lablel  className="block mb-1">Notes :</lablel>
                 <textarea type="text" value={results.note} name="note"className='block p-4 border-none' onChange={(e)=>handleInputChange(e.target.name,e.target.value)}/>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabTechnician;