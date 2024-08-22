// App.js or Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Mobile/Pages/Home/Home';
import CameraPage from './CameraPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/camera" element={<CameraPage />} />
            </Routes>
        </Router>
    );
};

export default App;
