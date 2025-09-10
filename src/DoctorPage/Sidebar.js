import React from 'react';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Doctor Home
      </div>
      <ul className="sidebar-menu">
        <li><a href="#">Profile</a></li>
        <li><a href="#">To-Do List</a></li>
        <li><a href="#">Patients</a></li>
        {/* Add more custom items here */}
        <li><a href="#">Appointments</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;

