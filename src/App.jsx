import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mobile from './Components/Mobile';
import CameraPage from './Components/Camera/CameraPage';
import DisplayPhotoPage from './Components/DisplayPhotoPage/DisplayPhotoPage'; // Ensure this is correctly imported

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Mobile />} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/display-photo" element={<DisplayPhotoPage />} /> {/* Add this route */}
        </Routes>
    );
};

export default App;
