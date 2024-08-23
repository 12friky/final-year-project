import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSeedling, FaBookOpen, FaBookmark, FaUser } from 'react-icons/fa';
import './BottomNave.css';

const BottomNave = () => {
  const navigate = useNavigate();

  const navToHome = () => {
    navigate('/');
};
  const navToExplore = () => {
    navigate('/explore-page');
};

const navToSave = () => {
  navigate('/saved-plant');
};

const navToProfile = () => {
  navigate('/profile');
}

  return (
    <div className="bottom-nav">
      <div className="nav-item" onClick={navToHome}>
        <FaHome className="icon" />
        <span>Home</span>
      </div>
      <div className="nav-item" onClick={navToExplore}>
        <FaSeedling className="icon" />
        <span>Explore</span>
      </div>

      <div className="nav-item" onClick={navToSave}>
        <FaBookmark className="icon" />
        <span>Saved</span>
      </div>
      <div className="nav-item" onClick={navToProfile}>
        <FaUser className="icon" />
        <span>Profile</span>
      </div>
    </div>
  );
}

export default BottomNave;
