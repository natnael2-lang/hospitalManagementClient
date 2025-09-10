import React, { useState } from 'react';

const StaffOverview = () => {
  const staffCount = 150;
  const departmentStaff = [
    { id: 1, name: 'Nurses', staffCount: 80 },
    { id: 2, name: 'Doctors', staffCount: 40 },
    { id: 3, name: 'Support Staff', staffCount: 30 },
  ];

  const averagePatientsPerStaff = 8;
  const averageSalaryPerStaff = 50000;

  const staffData = [
    {
      id: 1,
      name: 'John Doe',
      department: 'Nurses',
      role: 'Registered Nurse',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Doctors',
      role: 'Physician',
      phoneNumber: '987-654-3210',
      email: 'jane.smith@example.com',
    },
    // Add more staff data here...
  ];

  const [action, setAction] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [comment, setComment] = useState('');

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleEmployeeChange = (event) => {
    const employeeId = parseInt(event.target.value);
    const employee = staffData.find((staff) => staff.id === employeeId);
    setSelectedEmployee(employee);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic to perform the selected action with the selected employee and comment
    console.log('Action:', action);
    console.log('Selected Employee:', selectedEmployee);
    console.log('Comment:', comment);
    setAction('');
    setSelectedEmployee(null);
    setComment('');
  };

  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Staffing Overview
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Total Staff Count: {staffCount}
          </h2>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Staffing Levels by Department:
          </h2>

          {departmentStaff.length === 0 ? (
            <p className="text-gray-600 text-lg">No departments found.</p>
          ) : (
            <ul className="list-disc list-inside">
              {departmentStaff.map((department) => (
                <li key={department.id} className="text-lg text-gray-800">
                  {department.name}: {department.staffCount}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Additional Staff Information:
          </h2>
          <p className="text-lg text-gray-800">
            Average Patients per Staff: {averagePatientsPerStaff}
          </p>
          <p className="text-lg text-gray-800">
            Average Salary per Staff: ${averageSalaryPerStaff}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Staff Details:
          </h2>
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold">ID</th>
                <th className="px-4 py-2 font-bold">Name</th>
                <th className="px-4 py-2 font-bold">Department</th>
                <th className="px-4 py-2 font-bold">Role</th>
                <th className="px-4 py-2 font-bold">Phone Number</th>
                <th className="px-4 py-2 font-bold">Email</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((staff) => (
                <tr key={staff.id}>
                  <td className="px-4 py-2">{staff.id}</td>
                  <td className="px-4 py-2">{staff.name}</td>
                  <td className="px-4 py-2">{staff.department}</td>
                  <td className="px-4 py-2">{staff.role}</td>
                  <td className="px-4 py-2">{staff.phoneNumber}</td>
                  <td className="px-4 py-2">{staff.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Perform Action:
          </h2>
          <form onSubmit={handleFormSubmit} className="flex items-center">
            <label htmlFor="action" className="mr-4">
              Select Action:
            </label>
            <select
              id="action"
              value={action}
              onChange={handleActionChange}
              className="border border-gray-300 rounded px-4 py-2 mr-4"
            >
              <option value="">Select...</option>
              <option value="edit">Edit</option>
              <option value="delete">Delete</option>
            </select>

            <label htmlFor="employee" className="mr-4">
              Select Employee:
            </label>
            <select
              id="employee"
              value={selectedEmployee ? selectedEmployee.id : ''}
              onChange={handleEmployeeChange}
              className="border border-gray-300 rounded px-4 py-2 mr-4"
            >
              <option value="">Select...</option>
              {staffData.map((staff) => (
                <option key={staff.id} value={staff.id}>
                  {staff.name}
                </option>
              ))}
            </select>

            <label htmlFor="comment" className="mr-4">
              Comment:
            </label>
            <input
              type="text"
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              className="border border-gray-300 rounded px-4 py-2"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 ml-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;