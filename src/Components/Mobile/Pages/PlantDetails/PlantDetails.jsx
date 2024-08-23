import React from 'react'
import { FaArrowLeft, FaEllipsisH, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Images from '../../../../images/aloe1.png'
import './PlantDetails.css'

const PlantDetails = () => {

    const navigate = useNavigate(); // Initialize useNavigate

    const navToExplore = () => {
      navigate('/explore-page'); // Navigate to PlantDetails page
    };
    return (
        <div className="plantDetails">
            <div className="top-bar">
                <FaArrowLeft className="small-icon" onClick={navToExplore} />
            </div>
            <img src={Images} alt="Plant" className="plant-image" />

            <div className="plant-infos">
                <h2>Aloe Vera</h2>
                <p>Backyard</p>
            </div>

            <div className="tabs">
                <p className="actives">Details</p>
            </div>

            <p className="description">
                psum dolor sit amet consectetur, adipisicing elit. A illum temporibus eos dolorem quod, reiciendis labore repudiandae quos, debitis adipisci, necessitatibus neque saepe blanditiis sunt amet laudantium inventore odio ipsum! two bedroom, one bath on a large...
            </p>

            <div className="footer">
                <button className="book-now">Save</button>
            </div>
        </div>
    );
};

export default PlantDetails;