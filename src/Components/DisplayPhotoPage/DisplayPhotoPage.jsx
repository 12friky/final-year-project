import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DisplayPhotoPage.css';

const DisplayPhotoPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image } = location.state || {};
    const [scanning, setScanning] = useState(false);
    const [error, setError] = useState(null);

    const handleRetake = () => {
        navigate('/camera');
    };

    const handleScan = async () => {
        setScanning(true);
    
        if (image) {
            try {
                const base64Image = image.split(',')[1];
                const byteCharacters = atob(base64Image);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: 'image/jpeg' }); // Adjust MIME type if needed
        
                const formData = new FormData();
                formData.append('images', blob, 'plant.jpg');
                formData.append('organs', 'leaf');
        
                const response = await axios.post(
                    'https://my-api.plantnet.org/v2/identify/all',
                    formData,
                    {
                        headers: {
                            'Authorization': `Bearer ${import.meta.env.VITE_PLANT_ID_API_KEY}`,
                        },
                    }
                );
        
                if (response.data) {
                    navigate('/resultpage', { state: { plantDetails: response.data, image } });
                } else {
                    setError('No plant details received. Please try again.');
                }
            } catch (err) {
                console.error('Error identifying plant:', err.response?.data || err.message);
                setError('Failed to identify the plant. Please try again.');
            }
        } else {
            setError('No image available for scanning.');
        }
    
        setScanning(false);
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
            {scanning && <p>Scanning...</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default DisplayPhotoPage;
