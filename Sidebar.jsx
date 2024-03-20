// import React from 'react';
import './Sidebar.css'; // Assume this is your CSS file
import { Link } from 'react-router-dom'; 
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Welcome Admin</div>
      <ul className="sidebar-options">
      <Link to="/add">
        <li className="sidebar-option">Add Theme</li></Link>
        <li className="sidebar-option">Edit Theme</li>
        <li className="sidebar-option">Add Add-ons</li>
        <li className="sidebar-option">Edit Add-ons</li>
        <li className="sidebar-option">View Booked Events</li>
      </ul>
      <div className="sidebar-footer">
        <button className="kum-button">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
