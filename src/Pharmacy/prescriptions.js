import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PendingPrescriptions() {
  const [prescriptions, setPrescriptions] = useState(null);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_CURRENT_URL}/pharmacist/orders`, { withCredentials: true });
        const pendingPrescriptions = response.data.data;

        setPrescriptions(pendingPrescriptions);
        console.log("pending prescriptions ", pendingPrescriptions);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      }
    };

    fetchPrescriptions();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Pending Prescriptions</h1>
      {!prescriptions || prescriptions.length === 0 ? (
        <p>No pending prescriptions available.</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Medication</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Dosage</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription) => (
              <tr key={prescription._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{prescription.medication}</td>
                <td className="border border-gray-300 px-4 py-2">{prescription.dosage}</td>
                <td className="border border-gray-300 px-4 py-2">{prescription.quantity}</td>
                <td className="border border-gray-300 px-4 py-2">{prescription.status}</td>
                <td className="border border-gray-300 px-4 py-2">{prescription.date}</td>
                <td className="border border-gray-300 px-4 py-2">
              
                  <Link
                    to={{
                      pathname: '/medicine',
                      state: { patientId: prescription.patientId }
                    }}
                    className="ml-2 bg-blue-600 text-white py-1 px-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Add
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PendingPrescriptions;