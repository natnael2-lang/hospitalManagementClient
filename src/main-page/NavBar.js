import React, { useState } from 'react';
import { Link} from 'react-router-dom';

import useLogout from '../authentication/components/components';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const {handleLogout} = useLogout();
    
   
    return (
        <nav className="bg-white shadow-lg py-4 px-6 sticky top-0 w-full z-10 mb-5">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    <Link to="/">Woldia Hospital</Link>
                </div>
                <div className="hidden md:flex space-x-4">
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
                <button 
                    className="md:hidden flex items-center" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg 
                        className="w-6 h-6" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col space-y-2 mt-2 items-center">
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