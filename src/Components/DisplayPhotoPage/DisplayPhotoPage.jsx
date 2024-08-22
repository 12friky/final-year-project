import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DisplayPhotoPage.css';

const DisplayPhotoPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image } = location.state || {};
    const [scanning, setScanning] = useState(false);

    const handleRetake = () => {
        navigate('/camera');
    };

    const handleScan = () => {
        setScanning(true);
        setTimeout(() => setScanning(false), 3000); // Scan animation lasts 3 seconds
    };

    return (
        <div className="display-photo-page">
            {image ? (
                <div className="photo-container">
                    <img src={image} alt="Captured" className="captured-image" />
                    {scanning && <div className="scanner-line"></div>}
                </div>
            ) : (
                <p>No photo captured</p>
            )}
            <div className="buttons">
                <button onClick={handleRetake}>Retake</button>
                <button onClick={handleScan}>Scan</button>
            </div>
        </div>
    );
};

export default DisplayPhotoPage;
