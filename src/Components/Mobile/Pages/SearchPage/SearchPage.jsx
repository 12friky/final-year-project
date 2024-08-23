import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import plant from '../../../../images/aloe1.png'

import { FaSearch, FaArrowLeft } from 'react-icons/fa'; // Importing the search and back icons
import './SearchPage.css';

const fakePlants = [
  { id: 1, name: 'Aloe Vera', health: 'Healthy', image: plant },
  { id: 2, name: 'Fiddle Leaf Fig', health: 'Needs Water', image: plant },
  { id: 3, name: 'Snake Plant', health: 'Healthy', image: plant },
  { id: 4, name: 'Spider Plant', health: 'Overwatered', image: plant },
];

const defaultPlant = { name: 'Aloe Vera', health: 'Healthy', image: plant };

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    setSearchResults(fakePlants);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="search-page-container">
      <div className="search-page-header">
        <FaArrowLeft className="search-page-back-icon" onClick={handleBack} />
        <h2 className="search-page-title">Search</h2>
      </div>
      <div className="search-page-box">
        <FaSearch className="search-page-icon" />
        <input
          type="text"
          placeholder="Search for plants, tips, or resources..."
          className="search-page-input"
        />
        <button className="search-page-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      
      {/* Default Plant Display */}
      <div className="default-plant-display">
        <img src={defaultPlant.image} alt={defaultPlant.name} className="plant-image" />
        <div className="plant-info">
          <h3>{defaultPlant.name}</h3>
          <p>Status: {defaultPlant.health}</p>
        </div>
      </div>

      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((plant) => (
            <div key={plant.id} className="search-result-item">
              <img src={plant.image} alt={plant.name} className="plant-image" />
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p>Status: {plant.health}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;