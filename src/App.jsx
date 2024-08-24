import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mobile from './Components/Mobile';
import CameraPage from './Components/Camera/CameraPage';
import ExplorePage from './Components/Mobile/Pages/ExplorePage/ExplorePage';
import DisplayPhotoPage from './Components/DisplayPhotoPage/DisplayPhotoPage'; // Ensure this is correctly imported
import PlantDetails from './Components/Mobile/Pages/PlantDetails/PlantDetails';
import SavedPage from './Components/Mobile/Pages/SavedPage/SavedPage';
import ProfilePage from './Components/Mobile/Pages/ProfilePage/ProfilePage';
import SearchPage from './Components/Mobile/Pages/SearchPage/SearchPage';
import Login from './Components/Mobile/Pages/Account/Login/Login';
import SignUp from './Components/Mobile/Pages/Account/SignUp/SignUp';
import ResultPage from './Components/ResultPage/ResultPage';

const App = () => {
    return (
        <Routes>
            
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/home" element={<Mobile/>} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/display-photo" element={<DisplayPhotoPage />} /> {/* Add this route */}
            <Route path="/explore-page" element={<ExplorePage />} />
            <Route path="/plant-details" element={<PlantDetails />} />
            <Route path="/saved-plant" element={<SavedPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/resultpage" element={<ResultPage />} />
        </Routes>
    );
};

export default App;
