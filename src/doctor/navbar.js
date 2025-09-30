import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useLogout from "../authentication/components/components";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { handleLogout } = useLogout();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center sticky top-0 w-full z-10">
            <h1 className="text-lg font-bold">Doctor Portal</h1>
            <div className="flex items-center space-x-4">
                <NavLink 
                    to={`/appointments`} 
                    className={({ isActive }) => 
                        `hover:text-blue-200 ${isActive ? "text-blue-300" : ""}`
                    }
                >
                    Appointments
                </NavLink>
                <NavLink 
                    to="/patients"
                    className={({ isActive }) => 
                        `hover:text-blue-200 ${isActive ? "text-blue-300" : ""}`
                    }
                >
                    View Feedback
                </NavLink>
                <NavLink 
                    to={`/medical-history`} 
                    className={({ isActive }) => 
                        `hover:text-blue-200 ${isActive ? "text-blue-300" : ""}`
                    }
                >
                    View Medical History
                </NavLink>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `hover:text-blue-200 ${isActive ? "text-blue-300" : ""}`
                    }
                >
                    Home
                </NavLink>
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                        <img src="/path/to/profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                            <NavLink 
                                to="/changePassword" 
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Change Password
                            </NavLink>
                            <button 
                                onClick={handleLogout} 
                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;