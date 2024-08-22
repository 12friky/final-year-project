import React from 'react';
import { FaHome, FaSeedling, FaBookOpen, FaBookmark, FaUser } from 'react-icons/fa';
import './BottomNave.css';

const BottomNave = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <FaHome className="icon" />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <FaSeedling className="icon" />
        <span>Explore</span>
      </div>

      <div className="nav-item">
        <FaBookmark className="icon" />
        <span>Saved</span>
      </div>
      <div className="nav-item">
        <FaUser className="icon" />
        <span>Profile</span>
      </div>
    </div>
  );
}

export default BottomNave;
