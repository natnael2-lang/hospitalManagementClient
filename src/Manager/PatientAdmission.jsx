import React from 'react';

const PatientAdmission = () => {
  const patients = [
    {
      id: 1,          
      name: 'John Doe',
      dateOfBirth: '1990-01-01',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      dateOfBirth: '1995-05-10',
      phoneNumber: '987-654-3210',
      email: 'jane.smith@example.com',
    },
    // Add more patients here...
  ];

  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Manager Dashboard
        </h1>

        {patients.length === 0 ? (
          <p className="text-gray-600 text-lg">No patients found.</p>
        ) : (
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold">Patient Name</th>
                <th className="px-4 py-2 font-bold">Date of Birth</th>
                <th className="px-4 py-2 font-bold">Phone Number</th>
                <th className="px-4 py-2 font-bold">Email</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="px-4 py-2">{patient.name}</td>
                  <td className="px-4 py-2">{patient.dateOfBirth}</td>
                  <td className="px-4 py-2">{patient.phoneNumber}</td>
                  <td className="px-4 py-2">{patient.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PatientAdmission;