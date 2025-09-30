import React, { useEffect } from 'react';
import axios from 'axios';

function LabResults({ handleLabResult, labResult, labRequest }) {
  useEffect(() => {
    const fetchLabResults = async () => {
      if (!labRequest || !labRequest._id) {
        console.error('labRequest is not available or does not have an ID');
        return;
      }

      try {
        const response = await axios.get(`${process.env.REACT_APP_CURRENT_URL}/doctor/labResult/${labRequest._id}`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          handleLabResult(response.data.data); // Ensure this has lab results
        }
      } catch (error) {
        console.error('Failed to fetch lab results:', error);
      }
    };

    if (labRequest && labRequest._id) {
      fetchLabResults();
    }
  }, []);

  return (
    <div label="Lab Results">
      <h3 className="text-lg font-semibold">Lab Results</h3>
      {labResult && labResult.length > 0 ? (
        labResult.map((result) => (
          <div key={result._id} className="mb-6">
            <h4 className="font-semibold">Lab Result ID: {result._id}</h4>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Test</th>
                  <th className="border border-gray-300 p-2">Result</th>
                </tr>
              </thead>
              <tbody>
                {result.findings && Object.entries(result.findings).map(([testName, testResult]) => (
                  <tr key={testName}>
                    <td className="border border-gray-300 p-2">{testName}</td>
                    <td className="border border-gray-300 p-2">{testResult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No lab results available.</p>
      )}
    </div>
  );
}

export default LabResults;