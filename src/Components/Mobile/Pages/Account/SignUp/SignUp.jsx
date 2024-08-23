import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../../../../../images/aloe1.png';
import './SignUp.css';

const SignUp = () => {

    const navigate = useNavigate();
    const navToLogin = () => {
        navigate('/');

    }

    const [profileImage, setProfileImage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        location: '',
        plantTypes: [],
        experienceLevel: 'beginner',
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

  

    const handleSubmit = async (e) => {
        e.preventDefault();

        const normalizedFormData = {
            ...formData,
            email: formData.email.toLowerCase(),
            name: formData.name.toUpperCase(),
            location: formData.location.toLowerCase(),
        };

        const data = new FormData();
        Object.keys(normalizedFormData).forEach((key) => {
            data.append(key, normalizedFormData[key]);
        });
        if (profileImage) {
            data.append('profileImage', profileImage);
        }

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/api/signup`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data.message);
            resetForm();
        } catch (error) {
            alert('Failed to register user');
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            phoneNumber: '',
            location: '',
            plantTypes: [],
            experienceLevel: 'beginner',
        });
        setProfileImage(null);
        document.getElementById('upload-input').value = null;

      
    };

    return (
        <div className="signup-container-unique">
            <h3 className='sign-up-label'>SIGN UP FOR FREE</h3>
            <div className="signup-header">
                <img src={Logo} alt="Logo" className="signup-logo" />
                <div className="signup-upload-container">
                    <label htmlFor="upload-input" className="signup-image-circle">
                        {profileImage ? (
                            <img src={URL.createObjectURL(profileImage)} alt="Profile" className="signup-profile-image" />
                        ) : (
                            <div className="signup-placeholder">Upload Image</div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            id="upload-input"
                            className="signup-upload-input"
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>
            </div>
            <form className="signup-form-unique" onSubmit={handleSubmit}>
                <div className="signup-form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <label htmlFor="name"><FaUser /></label>
                </div>
                <div className="signup-form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <label htmlFor="email"><FaEnvelope /></label>
                </div>
                <div className="signup-form-group">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    <label htmlFor="password"><FaLock /></label>
                </div>
                <div className="signup-form-group">
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                    <label htmlFor="phoneNumber"><FaPhone /></label>
                </div>
                <div className="signup-form-group">
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Location"
                    />
                    <label htmlFor="location"><FaMapMarkerAlt /></label>
                </div>

                <button type="submit" className="signup-save-btn">Sign Up</button>
            </form>
            <p>Already have an account <span className='alreadyAccount' onClick={navToLogin}>sign-up</span></p>
        </div>
    );
};

export default SignUp;
