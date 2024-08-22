// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mobile from './Components/Mobile'
import CameraPage from './Components/CameraPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Mobile />} />
            <Route path="/camera" element={<CameraPage />} />
        </Routes>
    );
};

export default App;
