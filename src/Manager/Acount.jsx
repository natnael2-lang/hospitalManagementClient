import React from 'react'

function Acount() {
  
    const manager = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Manager',
        department: 'Sales'
      };
    
      const handleLogout = () => {
        // Perform logout logic here
        console.log('Logout');
      };
    
      return (
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-md shadow-md p-6 mb-4">
            <h1 className="text-2xl font-bold mb-2 mt-2">Manager Profile</h1>
            <p className="mb-4">
              Name: <span className="font-bold">{manager.name}</span>
            </p>
            <p className="mb-4">
              Email: <span className="font-bold">{manager.email}</span>
            </p>
            <p className="mb-4">
              Role: <span className="font-bold">{manager.role}</span>
            </p>
            <p className="mb-4">
              Department: <span className="font-bold">{manager.department}</span>
            </p>
          </div>
    
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => console.log('Settings')}
            >
              Settings
            </button>
    
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      );
    }

export default Acount