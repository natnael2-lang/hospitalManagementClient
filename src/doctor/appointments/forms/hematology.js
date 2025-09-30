import React, { useState } from 'react';

const Hematology = ({ handleForm }) => {
  const initialTestsState = {
    rbcCount: false,
    hemoglobin: false,
    mcv: false,
    mch: false,
    mchc: false,
    rdw: false,
    plateletCount: false,
    pdw: false,
    mpv: false,
    esr: false,
    reticulocyteCount: false,
    labTechnicianId: ""
  };

  const [selectedTests, setSelectedTests] = useState(initialTestsState);

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    setSelectedTests((prev) => ({
      ...prev,
      [name]: name === "labTechnicianId" ? value : checked,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const tests = Object.keys(selectedTests)
    .filter((key) => key !== "labTechnicianId" && selectedTests[key]) 
    .map((key) => ({
      name: key.replace(/([A-Z])/g, ' $1').toUpperCase(),
    }));

  const requestData = {
    testRequests:tests,
    labTechnicianId: selectedTests.labTechnicianId,
  };

  handleForm(requestData);
  setSelectedTests(initialTestsState);
};

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Hematology Tests</h2>
      {Object.keys(selectedTests).map((test) => (
        test !== "labTechnicianId" && ( // Exclude labTechId from checkboxes
          <div key={test} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={test}
              name={test}
              checked={selectedTests[test]}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={test} className="ml-2 text-gray-700">
              {test.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </label>
          </div>
        )
      ))}
      <div className="w-full px-3 mb-6">
        <label className="block text-gray-700">Lab Technician</label>
        <select
          className="form-select mt-1 block w-full outline-none bg-slate-200"
          name='labTechnicianId'
          value={selectedTests.labTechnicianId}
          onChange={handleCheckboxChange}
        >
          <option value="">Select Lab Technician</option>
          <option value="DR1002">Blood</option>
          <option value="DR1005">Eye</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Hematology;