import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LabTechnician = () => {
  const [labRequests, setLabRequests] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [results, setResults] = useState({});

  useEffect(() => {
    fetchLabRequests();
  }, []);

  const fetchLabRequests = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_CURRENT_URL}/labTechnician/labRequests`, { withCredentials: true });
      setLabRequests(response.data.data); 
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
    const { note, ...findings } = results; // Destructure to exclude note

    const requestData = {
      findings, // Only include findings without note
      labRequestId: currentRequest._id, 
      doctorId: currentRequest.doctorId,
      notes: note || null, // Add note to notes field
    };

    try {
      await axios.post(`${process.env.REACT_APP_CURRENT_URL}/labTechnician/labResult`, requestData, { withCredentials: true });
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
      {labRequests.length > 0 && labRequests.map((request) => (
        <div key={request._id} className="mb-6">
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
            {currentRequest.testRequests.map((test) => (
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
              <label className="block mb-1">Notes:</label>
              <textarea
                value={results.note || ''} // Ensure note is handled correctly
                name="note"
                className="block p-4 border border-gray-300 rounded"
                onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              />
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