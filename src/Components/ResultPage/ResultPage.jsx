import React from 'react';
import BottomNave from '../BottonNav/BottomNave';
import { useLocation,useNavigate } from 'react-router-dom';
import { FaSave, FaRedo } from 'react-icons/fa'; 
import './ResultPage.css';

const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { plantDetails, image } = location.state || {};

    const handleRetake = () => {
        navigate('/camera');
    };

    const handleSave = () => {
        navigate('/camera');
    };

    return (
        <div className="result-page">
            <div className="photo-container">
                <img src={image} alt="Captured" className="captured-image" />
            </div>
            {plantDetails && plantDetails.results && plantDetails.results.length > 0 ? (
                <div className="plant-details">
                    <h2 className="identification-heading">Plant Identification Results</h2>
                    <div className="details-items">
                        <p className='resultItems'><strong className='plant-qualities' >Best Match:</strong> {plantDetails.bestMatch}</p>
                        <p className='resultItems'><strong className='plant-qualities'>Common Names:</strong> {plantDetails.results[0]?.species?.commonNames?.join(', ') || 'N/A'}</p>
                        <p className='resultItems'><strong className='plant-qualities'>Scientific Name:</strong> {plantDetails.results[0]?.species?.scientificNameWithoutAuthor || 'N/A'}</p>
                        <p className='resultItems'><strong className='plant-qualities'>Description:</strong> {plantDetails.results[0]?.species?.wikiDescription?.value || 'No description available'}</p>
                        <p className='resultItems'><strong className='plant-qualities'>Health Assessment:</strong> {plantDetails.health_assessment?.is_healthy ? 'Healthy' : 'Unhealthy'}</p>
                    </div>
                    <div className="buttons-container">
                        <button onClick={handleSave} className="save-details-btn">
                            <FaSave /> Save Details
                        </button>
                        <button onClick={handleRetake} className="retake-photo-btn">
                            <FaRedo /> Retake Photo
                        </button>
                    </div>
                </div>
            ) : (
                <p>No plant details available.</p>
            )}
  <br />            <BottomNave/>
        </div>
    );
};

export default ResultPage;
