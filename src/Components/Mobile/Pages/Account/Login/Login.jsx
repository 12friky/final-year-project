import React, { useState } from 'react'; // Import useState
import { FaUser, FaLock, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../../images/aloe1.png';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Fake credential check
        if (email === 'me@gmail.com' && password === 'admin') {
            setError('');
            // Simulate a successful login
            navigate('/home'); // Replace '/dashboard' with your actual route
        } else {
            setError('Invalid email or password');
        }

        setLoading(false);
    };

    const handleCreateAccountClick = () => {
        navigate('/signup'); 
    };

    return (
        <div className="login-container">
            {error && <div className="error-message">{error}</div>}
            <div className="login-box">
                <img src={Logo} alt="Logo" className="logo" />
                <h2 className="Prompt">
                    Please Login
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        
                        <div className="input-with-icon">
                            <FaUser className="input-icon" />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        
                        <div className="input-with-icon">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? <span className="loading-spinner"></span> : 'Log in'}
                    </button>
                </form>
                <div>
                    <p>Don't have an account? <span className='create-one' onClick={handleCreateAccountClick}>create one</span></p>
                </div>
                <div className="link-group">
                    <a href="#">Change Password</a>
                    <a href="#">Reset Password</a>
                </div>
            </div>
        </div>
    );
};

export default Login;