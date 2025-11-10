import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            setMessage("Please fill in all fields.");
            return;
        }
        let response;
        await axios.post('http://localhost:5173/api/login', {email, password})
        .then(res => { response = res.status })
        .catch(err => console.log(err));
        console.log(response);
        if (response === 200) {
            onLoginSuccess(email);

            setMessage("Logging in...");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            setMessage("Invalid Login");
        }
    };

    return (
        <main className="login-page">
            <div className="login-container">
                <h2 className="login-title">Welcome</h2>
                <p className="login-text">Log in to Continue.</p>

                {message && <p className="login-message"></p>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="you@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    <button className ="submit-btn" type="submit">
                        Log In
                    </button>

                    <p className="sign-up-text">
                        Don't have an account? 
                        <button className="signup-link" onClick={() => navigate("/signup")}>Sign up</button>
                        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Login;