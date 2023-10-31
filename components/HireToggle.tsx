"use client";

import React, { useState } from 'react';
import { FaUserTie, FaUserFriends, FaToggleOn } from 'react-icons/fa';


const HireToggle = () => {
  const [isHiring, setIsHiring] = useState(true);

  const handleToggle = () => {
    setIsHiring(!isHiring);
  };

  return (
    <div className="toggle-container flex items-center justify-center gap-10">
      <div className={`toggle-button ${isHiring ? 'active' : ''}`} onClick={handleToggle}>
        {/* <FaUserTie className="hiring-icon" /> */}
        <h1 className="hero-heading">Hiring</h1>
      </div>
      <FaToggleOn className="toggle-icon"/>
      <div className={`toggle-button ${!isHiring ? 'active' : ''}`} onClick={handleToggle}>
        <h1 className="hero-heading">Freelancers</h1>
        {/* <FaUserFriends className="freelancers-icon" /> */}
      </div>
    </div>
  );
};

export default HireToggle;
