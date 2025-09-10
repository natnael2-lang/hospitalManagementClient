import React, { useState } from 'react';
import axios from 'axios';

const Hematology = ({handleForm }) => {
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
  };

  const [selectedTests, setSelectedTests] = useState(initialTestsState);
  

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedTests((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const tests = Object.keys(selectedTests).map((key) => ({
    name: key.replace(/([A-Z])/g, ' $1').toUpperCase(),
    result: "",
  })).filter(test => selectedTests[test.name]);

  const requestData = {
    tests,
  };
handleForm(requestData);
setSelectedTests(initialTestsState);
  
};
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Hematology Tests</h2>
      {Object.keys(selectedTests).map((test) => (
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
      ))}
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