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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Navigate to the display page and pass the uploaded image data
                navigate('/display-photo', { state: { image: reader.result } });
            };
            reader.readAsDataURL(file);
        }
    };

    const capturePhoto = () => {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL('image/png');

        // Navigate to the display page and pass the captured image data
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
                <FaCamera className="icons" onClick={capturePhoto} />
                <FaSync className="icons" onClick={toggleCamera} />
                <FaUpload className="icons" onClick={handleUploadClick} />
                <input
                    type="file"
                    accept="image/*"
                    id="file-input"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
};

export default CameraPage;
