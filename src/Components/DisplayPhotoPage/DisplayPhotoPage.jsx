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
                const base64Image = image.split(',')[1]; // Extract base64 string from the image

                // Create FormData object to send multipart data
                const formData = new FormData();
                formData.append('images', base64Image);
                formData.append('organs', 'leaf'); // Example organ type
                formData.append('plant_details', JSON.stringify(['common_names', 'wiki_description', 'taxonomy']));

                // Send POST request with multipart form data
                const response = await axios.post(
                    'https://my-api.plantnet.org/v2/identify/all',
                    formData,
                    {
                        headers: {
                            'Authorization': `Bearer ${import.meta.env.VITE_PLANT_ID_API_KEY}`,
                            // 'Content-Type': 'multipart/form-data', // No need to set this manually
                        },
                    }
                );
    
                // Navigate to ResultPage with plant details and image
                navigate('/resultpage', { state: { plantDetails: response.data, image } });
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
