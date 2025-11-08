import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { getUsername } from './userStore.js';


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavigate = (path) => {
    setIsOpen(false); // close sidebar when navigating
    navigate(path);
  };

  const username = getUsername() || "Guest";

  return (
    <>
      {/* Title Bar */}
      <header className="topbar">
        <div style={{ padding: "40px" }}>
            <h1 className="user-greet">Welcome to the Homepage, {username}!</h1>
            <p>This is your main page after login.</p>
            
          </div>
        <div className="topbar-content">
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1 className="title">Focus Quest</h1>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✕
        </button>

        <ul>
          <li onClick={() => handleNavigate('/progress')}>Progress</li>
          <li onClick={() => handleNavigate("/")}>Log Out</li>

        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      
    </>
  );
}

export default Sidebar;
