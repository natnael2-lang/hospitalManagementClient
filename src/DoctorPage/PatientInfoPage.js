// Import necessary modules
import React, { useEffect, useState } from 'react'; // Import React and hooks for state and effects
import './styles.css'; // Import CSS file for styling

// Define PatientInfoPage functional component
const PatientInfoPage = () => {
  // State to hold patient data
  const [patients, setPatients] = useState([]); // Define state variable for patients array

  // Function to fetch patient data from the database
  const fetchPatients = async () => {
    try {
      // Make API call to fetch patient data
      const response = await fetch('/api/list_patient'); // Replace 'api_url_here' with actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch patient data');
      }
      const data = await response.json(); // Parse response JSON
      setPatients(data); // Update patients state with fetched data
    } catch (error) {
      console.error('Error fetching patient data:', error); // Log error if fetch fails
    }
  };

  // Fetch patient data when component mounts
  useEffect(() => {
    fetchPatients(); // Call fetchPatients function when component mounts
  }, []);

  // JS structure for the component
  return (
    <div>
      <div className="container1">
        {/* Form for searching patients */}
        <form action="#" method="get" id="search-form">
          <input type="text" id="search-input" placeholder="Search patient..." />
          <button type="submit">Search</button>
        </form>
        {/* Display patient information in a table */}
        <div className="patient-info1">
          <table>
            <thead id="test_1234">
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>{patient.id}</td>
                  <td>{patient.firstName + " " + patient.lastName}</td>
                  <td>{patient.dob}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.emergencyContact}</td>
                  <td>{patient.streetAddress}</td>
                </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientInfoPage; // Export the PatientInfoPage component
