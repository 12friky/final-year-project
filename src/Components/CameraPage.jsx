import React, { useState, useEffect, useRef } from 'react';
import { FaCamera, FaArrowLeft, FaSync } from 'react-icons/fa';

const CameraPage = () => {
    const [stream, setStream] = useState(null);
    const [facingMode, setFacingMode] = useState('user'); // 'user' for front camera, 'environment' for back camera
    const videoRef = useRef(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
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
    }, [stream, facingMode]);

    const toggleCamera = () => {
        setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.src = reader.result;
                document.body.appendChild(img); // For demonstration; handle image appropriately
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="camera-page">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="camera-controls">
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileUpload} 
                    style={{ display: 'none' }} 
                    id="upload" 
                />
                <label htmlFor="upload">
                    <FaCamera className="icon" />
                </label>
                <FaSync className="icon rotate-icon" onClick={toggleCamera} />
                <FaArrowLeft className="icon back-icon" onClick={() => window.history.back()} />
            </div>
        </div>
    );
};

export default CameraPage;
