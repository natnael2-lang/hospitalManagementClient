import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            const response = await axios.get("http://localhost:3001/auth/logout", { withCredentials: true });
            navigate(response.data.redirect);
        } catch (err) {
            if (err.response && err.response.status === 500) {
                console.log("Server error");
            } else {
                console.log("Check the network");
            }
        }
    };

    return (
        <nav className="bg-white shadow-lg py-4 px-6 sticky top-0 w-full z-10 mb-5 flex flex-col">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    <Link to="/"> Woldia Hospital</Link>
                </div>
                <div className="space-x-4">
                    <Link to='/' className="navbar-item text-gray-700 hover:text-blue-600 transition duration-200">
                        Home
                    </Link>
                    <Link to="/announcement" className="navbar-item text-gray-700 hover:text-blue-600 transition duration-200">
                        Announcement
                    </Link>
                    <Link to="/login" className="navbar-item text-gray-700 hover:text-blue-600 transition duration-200">
                        Login
                    </Link>
                    <button onClick={handleLogout} className="navbar-item text-gray-700 hover:text-blue-600 transition duration-200">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;