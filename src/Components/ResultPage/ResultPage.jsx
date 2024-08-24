import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultPage.css';

const ResultPage = () => {
    const location = useLocation();
    const { plantDetails, image } = location.state || {};

    return (
        <div className="result-page">
            <div className="photo-container">
                <img src={image} alt="Captured" className="captured-image" />
            </div>
            {plantDetails ? (
                <div className="plant-details">
                    <h2>Plant Identification Results</h2>
                    <p><strong>Common Names:</strong> {plantDetails.suggestions[0]?.plant_name}</p>
                    <p><strong>Scientific Name:</strong> {plantDetails.suggestions[0]?.plant_details?.scientific_name}</p>
                    <p><strong>Description:</strong> {plantDetails.suggestions[0]?.plant_details?.wiki_description?.value}</p>
                    <p><strong>Health Assessment:</strong> {plantDetails.health_assessment.is_healthy ? 'Healthy' : 'Unhealthy'}</p>
                </div>
            ) : (
                <p>No plant details available.</p>
            )}
        </div>
    );
};

export default ResultPage;
