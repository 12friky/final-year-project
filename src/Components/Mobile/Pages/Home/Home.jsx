import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaPlus, FaBarcode, FaQrcode, FaLeaf, FaSeedling, FaBell } from 'react-icons/fa';
import Backyard from '../../../../images/Backyard.png'
import Icon from '../../../../images/icon1.png'
import LivingRoom from '../../../../images/Living room.png'
import Kitchen from '../../../../images/Kitchen.png'
import Aloe1 from '../../../../images/aloe-vera2.png'
import Aloe2 from '../../../../images/aloe1.png'
import Aloe3 from '../../../../images/plant4.png'
import Aloe5 from '../../../../images/plant5.png'
import './Home.css'


const Home = () => {
    const navigate = useNavigate();

    const startCamera = () => {
        navigate('/camera');
    };
    const navToSearch = () => {
        navigate('/search');
    };

    return (
        <div className="home-container">
            {/* Header */}
            <div className="header">
                <h1>My Plants</h1>
                <div className="more-icons">
                    <FaSearch className="search-icon" onClick={navToSearch} />
                    <FaPlus className="search-icon" />
                </div>
            </div>

            {/* Scan Button */}
            <button className="scan-btn" onClick={startCamera}>
                <FaQrcode className="scan-icon" />
                Scan and identify the plant
            </button>

            {/* Popular Plants Section */}
            <div className="section">
                <div className="section-header1">
                    <h2>Popular plants</h2>
                    <span>View all</span>
                </div>
                <div className="popular-plants">
                    <div className="plant">
                        <div className='plant-mainInfo'>
                            <div className='plant-health'>Fit Well</div>
                            <div className="plant-info">
                                <p>Peperomia <br /> Houseplant</p>
                            </div>
                        </div>
                        <img src={Aloe1} alt="Peperomia Houseplant" />
                    </div>
                    <div className="plant">
                        <div className='plant-mainInfo'>
                            <div className='plant-health' style={{color:'red'}}>Not Well</div>
                            <div className="plant-info">
                                <p>Peperomia <br /> Houseplant</p>
                            </div>
                        </div>
                        <img src={Aloe2} alt="Asplenium Houseplant" />
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="sectionBox">
                <div className="section-header1">
                    <h2>Categories</h2>
                    <span>View all</span>
                </div>
                <div className="categoriesBox">
                    <div className="category-row">
                        <div className="category">
                            <img src={LivingRoom} className="icon1" alt="Living Room Icon" />
                            <div>
                                <p>Living Room</p>
                                <span>2 Plants</span>
                            </div>
                        </div>
                        <div className="category">
                            <img src={Kitchen} className="icon2" alt="Kitchen Icon" />
                            <div>
                                <p>Kitchen</p>
                                <span>1 Plant</span>
                            </div>
                        </div>
                    </div>
                    <div className="category-row">
                        <div className="category">
                            <img src={Backyard} className="icon3" alt="Backyard Icon" />
                            <div>
                                <p>Drawing Room</p>
                                <span>2 Plants</span>
                            </div>
                        </div>
                        <div className="category">
                            <img src={Icon} className="icon4" alt="Icon" />
                            <div>
                                <p>Backyard</p>
                                <span>8 Plants</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alerts for Today Section */}
            <div className="section">
                <div className="section-header">
                    <h2>Alerts for today</h2>
                    <span>View all</span>
                </div>
                <div className="alerts">
                    <div className="alert">
                        <img src={Aloe3} alt="Cactus Alert" />
                        <div className="alert-info">
                            <p>Water your Cactus today (Living room)</p>
                            <span>2 weeks old, did you water it twice a week?</span>
                        </div>
                    </div>
                    <div className="alert">
                        <img src={Aloe5} alt="Bamboo Alert" />
                        <div className="alert-info">
                            <p>Prune the dead branches of Bamboo tree</p>
                            <span>It's been 2-3 weeks since you have pruned the bamboo tree.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;