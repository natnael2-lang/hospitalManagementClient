import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <nav className="sticky top-0 w-full bg-blue-600 p-4 mb-4">
            <ul className="flex space-x-4 justify-end text-white">
                <li>
                    <Link to="/admin/hire" className="hover:underline">Hire</Link>
                </li>
                <li>
                    <Link to="/admin/fire" className="hover:underline">Fire</Link>
                </li>
                <li>
                    <Link to="/admin/finance" className="hover:underline">Finance</Link>
                </li>
                <li>
                    <Link to="/admin/profile" className="hover:underline">Profile</Link>
                </li>
                <li>
                    <Link to="/admin/employees" className="hover:underline">Employee Details</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNavbar;