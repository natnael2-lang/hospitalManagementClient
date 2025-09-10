import React, { useState } from "react";
import Unknown from "../asset/unknown.jpg";

import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className="new-navbar">
    
            <div className="new-nav-bar">
                <ul className="new-nav-bar2">
                    <li onClick={() => { setMenu("Home") }}>
                        <Link to="/admin">Home</Link>
                        {menu === "Home" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Content") }}>
                        <Link to="/Content">Content</Link>
                        {menu === "Content" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Campaig") }}>
                        <Link to="/Campaig">Campaign</Link>
                        {menu === "Campaig" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Employee Management") }}>
                        <Link to="/Employee">Employee Management</Link>
                        {menu === "Employee Management" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Finance Portal") }}>
                        <Link to="/Financee">Finance Portal</Link>
                        {menu === "Finance Portal" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("Human Resource Management") }}>
                        <Link to="/HRM">Human Resource Management</Link>
                        {menu === "Human Resource Management" ? <hr /> : null}
                    </li>
                </ul>
            </div>
            <div className="new-profile" onClick={() => { setMenu("profile") }}>
                <Link to="/profile">
                    <img src={Unknown} alt="Profile" />
                    <h1>Profile</h1>
                </Link>
                {menu === "profile" ? <hr /> : null}
            </div>
        </div>
    );
}
export default Navbar;
