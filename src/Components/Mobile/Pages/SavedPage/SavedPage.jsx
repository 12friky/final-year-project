import React from 'react'
import './SavedPage.css'
import BottonNav from '../../BottonNav/BottomNave'

import Plant from '../../../../images/aloe-vera2.png'

const SavedPage = () => {
    return (
      <div className="saved-page">
        <div>
            <h3>Saved Plant</h3>
        </div>
        <div className="saved-item">
          <img src={Plant} alt="Plant" className="saved-image" />
          <div className="saved-info">
            <h3 className="saved-name">Aloe Vera</h3>
            <p className="saved-location">Kitchen</p>
          </div>
          <div className='plant-condition'>
            <p>Plant Health</p>
            <p style={{color:'green'}}>Fit well</p>
          </div>
        </div>

        <div className="saved-item">
          <img src={Plant} alt="Plant" className="saved-image" />
          <div className="saved-info">
            <h3 className="saved-name">Potato</h3>
            <p className="saved-location">Backyard</p>
          </div>
          <div className='plant-condition'>
            <p>Plant Health</p>
            <p style={{color:'red'}}>Not well</p>
          </div>
        </div>
        <BottonNav />
      </div>
    );
  };
  
  export default SavedPage;
