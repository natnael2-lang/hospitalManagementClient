// components/Employees.js
import React from 'react';

const Employees = () => {
  

  return (
    <div>
      <h1 className=" flex justify-center text-2xl font-bold mb-4 mt-12">Employee Management Page</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className=" ml-80 text-lg font-bold mb-2 mr-20"> Welcome to the Employee Page! Here, you can explore the various activities that managers undertake to support your growth and success.</h2>
        <div className="bg-gray-500 w-screen h-screen p-4 block ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" >
          Hiring and Onboarding
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2" >
          Performance Management:
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
          Employee Development
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-2" >
          Communication a
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-2" >
          Workload 
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-2" >
          Conflict Resolution
          </button>
        </div>
        
        
      </div>
    </div>
  );
}

export default Employees;
