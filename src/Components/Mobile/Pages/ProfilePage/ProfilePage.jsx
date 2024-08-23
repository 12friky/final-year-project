import React from 'react'
import { useNavigate } from 'react-router-dom';

import BottonNav from '../../BottonNav/BottomNave'
import ProfilePic from '../../../../images/aloe-vera2.png'
import './ProfilePage.css'

const ProfilePage = () => {

  const navigate = useNavigate();
  const LogOut = () => {
      navigate('/');

  }
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={ProfilePic} alt="Profile" className="profile-pics" />
        <h2 className="profile-name">Francis Ngumah</h2>
        <p className="profile-email">jhonking@gmail.com</p>
        <button className="edit-profile-button">Edit Profile</button>
      </div>
      <div className="profile-items">
        <div className="profile-item">My Plants</div>
        <div className="profile-item">Care Schedule</div>
        <div className="profile-item">Plant Health Records</div>
        <div className="profile-item">Settings</div>
        <div className="profile-item">Tips & Resources</div>
        <div className="profile-item">Community</div>
        <div className="profile-item">Support</div>
        <div className="profile-item" onClick={LogOut}>Logout</div>
      </div>
      <BottonNav/>
    </div>
  );
};

export default ProfilePage;
