import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const MealsOfTheDay = () => {

    const navigate = useNavigate();
    // Logic to host meals needed here 
    return (
        <main>
            <h1 className='meal-of-day-title'>Meals of the Day</h1>
        {/* Logic to show different types of food on button click goes here */}
        <div>
            <button className='breakfast-btn'>Breakfast</button>
            <button className='lunch-btn'>Lunch</button>
            <button className='dinner-btn'>Dinner</button>
        </div>
            <p className='popular-meals-tab'>Check Popular Meals This Week</p>
            <button onClick={() => navigate("/")}>Home</button>
        </main>
    );
    
 };

export default MealsOfTheDay;