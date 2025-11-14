import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Styling/SignUp.css";

const SignUp = () => {
    const[fullName, setFullName] = useState("");
    const[email, setEmail] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[error, setError] = useState("");

    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // Logic to send to backend database will goß here:
    }

    return (
    <main className="signup-page">
        <div className="background-container">
            <form onSubmit={handleSubmit}>
                <h1 className="sign-up-title">Sign up</h1>
                {error && <p style={{ color: 'red'}}>{error}</p>}
            <div className="sign-up-container">
                <div className="form-group">
                    <label>Full Name:</label>
                    <input className="full-name-input"
                        type="fullName"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Username:</label>
                    <input classname="username-input"
                        type="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input className="email-input"
                        type="email"
                        id="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input className="password-input"
                        type="password"
                        id="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input className="confirm-pass-input"
                        type="confirm-password"
                        id="ConfirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
            {/* Navigates back to login to confirm login */}
            <button className="submit-btn" type="submit" onClick={() => navigate("/userDetail")}>Sign Up</button>
            </div>
            </form>
            <button type="back-btn" onClick={() => navigate(-1)}>Back</button>
        </div>
    </main>
    );
};

export default SignUp;
