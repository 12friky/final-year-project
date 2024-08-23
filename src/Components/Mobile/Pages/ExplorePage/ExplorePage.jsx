import React from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './ExplorePage.css'
import BottonNav from '../../BottonNav/BottomNave'
import { FaHotel,FaCouch,FaTree, FaUtensils, FaCalendarAlt } from 'react-icons/fa';
import Profile from '../../../../images/aloe1.png'
import Plant from '../../../../images/aloe-vera2.png'


const ExplorePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDestinationClick = () => {
    navigate('/plant-details'); // Navigate to PlantDetails page
  };

  return (
    <div className="explore-page">
      <div className="search-bar">
        <input type="text" placeholder="Looking for..." />
        <div className="profile-pic">
          <img src={Profile} alt="Profile" />
        </div>
      </div>

      <div className="category-section">
        <h2>Category</h2>
        <div className="categories">
          <div className="category-item">
            <FaTree size={30} />
            <p>GARDEN</p>
          </div>
          <div className="category-item">
            <FaCouch size={30} />
            <p>LIVING <br /> ROOM</p>
          </div>
          <div className="category-item">
            <FaUtensils size={30} />
            <p>KITCHEN</p>
          </div>
          <div className="category-item">
            <FaCalendarAlt size={30} />
            <p>BACKYARD</p>
          </div>
        </div>
      </div>

      <div className="destination-section">
        <h2>Best Destination</h2>
        <div className="destinations">
          {[...Array(4)].map((_, index) => (
            <div className="destination-item" key={index} onClick={handleDestinationClick}>
              <img src={Plant} alt="Destination" />
              <div className="destination-info">
                <h3>{index % 2 === 0 ? 'BACKYARD' : 'KITCHEN'}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottonNav />
    </div>
  );
};

export default ExplorePage;