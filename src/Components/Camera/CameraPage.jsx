import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera, FaSync, FaUpload } from 'react-icons/fa';
import './CameraPage.css';

const CameraPage = () => {
    const [stream, setStream] = useState(null);
    const [facingMode, setFacingMode] = useState('user');
    const videoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const startCamera = async () => {
            try {
                if (stream) {
                    stream.getTracks().forEach(track => track.stop());
                }
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode }
                });
                setStream(mediaStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (error) {
                console.error('Error accessing the camera', error);
            }
        };

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [facingMode]); // Removed `stream` from dependency array

    const toggleCamera = () => {
        setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
    };

    const handleUploadClick = () => {
        document.getElementById('file-input').click();
    };

    const capturePhoto = () => {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL('image/png');

        // Navigate to the display page and pass the image data
        navigate('/display-photo', { state: { image: imageDataUrl } });
    };

    return (
        <div className="camera-page">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            ></video>
            <div className="camera-controls">
                <FaCamera className="icon" onClick={capturePhoto} />
                <FaSync className="icon rotate-icon" onClick={toggleCamera} />
                <FaUpload className="icon" onClick={handleUploadClick} />
                <input
                    type="file"
                    accept="image/*"
                    id="file-input"
                    style={{ display: 'none' }}
                />
            </div>
        </div>
    );
};

export default CameraPage;
