import React, { useState, useRef, useEffect } from 'react';
import AppointmentForm from './AppointmentForm.js';
import PatientRegistration from './PatientRegistration.js';
import InquiryHandler from './InquiryHandler.js';
import PatientRecords from './PatientRecords.js';
import TelemedicineCoordinator from './TelemedicineCoordinator.js';
import Profile from './Profile.js';
import useLogout from "../authentication/components/components"

const SelectedComponent = {
  AppointmentForm: 'AppointmentForm',
  PatientRegistration: 'PatientRegistration',
  InquiryHandler: 'InquiryHandler',
  PatientRecords: 'PatientRecords',
  TelemedicineCoordinator: 'TelemedicineCoordinator',
  Profile: 'Profile',
};

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 
  const {handleLogout}=useLogout();

  const handleNavigationChange = (component) => {
    setSelectedComponent(component);
    setDropdownOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };


    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case SelectedComponent.AppointmentForm:
        return <AppointmentForm />;
      case SelectedComponent.PatientRegistration:
        return <PatientRegistration />;
      case SelectedComponent.InquiryHandler:
        return <InquiryHandler />;
      case SelectedComponent.PatientRecords:
        return <PatientRecords />;
      case SelectedComponent.TelemedicineCoordinator:
        return <TelemedicineCoordinator />;
      case SelectedComponent.Profile:
        return <Profile />;
      default:
        return <PatientRegistration/>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" >
      {/* Fixed Navigation bar */}
      <nav className="bg-blue-600 px-4 py-2 sticky w-full z-10 top-0  " ref={dropdownRef}>
        
        <div className="relative flex justify-between " >
          <h1 className="text-white text-2xl font-bold">Receptionist</h1>
          <button
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-400"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Navigation
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-full w-48 bg-white rounded shadow-lg z-20" >
              <button className="block px-4  py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={() => handleNavigationChange(SelectedComponent.AppointmentForm)}>
                Schedule Appointment
              </button>
              <button className="block px-4  py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={() => handleNavigationChange(SelectedComponent.PatientRegistration)}>
                Patient Registration
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={() => handleNavigationChange(SelectedComponent.InquiryHandler)}>
                Handling Inquiries
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={() => handleNavigationChange(SelectedComponent.PatientRecords)}>
                Managing Patient Records
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={() => handleNavigationChange(SelectedComponent.TelemedicineCoordinator)}>
                Telemedicine Coordinator
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={() => handleNavigationChange(SelectedComponent.Profile)}>
                Profile
              </button>
              <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                        Logout
                    </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-grow container mx-auto p-4 mt-16 overflow-y-auto" >
        <div className="bg-white shadow-md rounded p-4">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default App;