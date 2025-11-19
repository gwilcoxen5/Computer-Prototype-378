import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import UserDetail from "./Pages/UserDetail";
import Prefrences from './Pages/Prefrences';
import Goals from './Pages/Goals';
import MealsOfTheDay from './Pages/MealsOfTheDay';
import PopularMealsWeek from './Pages/PopularMealsWeek';
import './App.css'

// place holder name for now
const APP_NAME = "App";

function Home() {

  const navigate = useNavigate();

  return (
    <>
    <section className= "title-section">
       <h1 className="welcome-text>">Welcome to {APP_NAME}</h1>
       {/* Login Button */}
       <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
       <p>Need an account?</p>
       {/* Sign Up Button */}
       <button className="sign-up-btn" onClick={() => navigate("/signup")}>Create a Account</button>
    </section>

    {/* Buttons to naviate to different buttons for testing only */}
    <section>Pages to Navigate (TEST):</section>
    <button onClick={() => navigate("/userDetail")}>User Details Page</button>
    <button onClick={() => navigate("/prefrences")}>Prefrences Page</button>
    <button onClick={() => navigate("/myGoals")}>Goals Page</button>
    <button onClick={() => navigate("/mealsOfDay")}>Meals of The Day</button>
    <button onClick={() => navigate("/popularMealsOfWeek")}>Popular Meals of The Week</button>

    </>
  );
}

function App() {

  const [currentUser, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userDetail" element={<UserDetail />} />
        <Route path="/prefrences" element={<Prefrences />} />
        <Route path="/myGoals" element={<Goals />} />
        <Route path="/mealsOfDay" element={<MealsOfTheDay />} />
        <Route path="/popularMealsOfWeek" element={<PopularMealsWeek />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
