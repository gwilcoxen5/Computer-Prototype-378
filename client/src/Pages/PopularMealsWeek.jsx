import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const PopularMealsWeek =() => {

    const navigate = useNavigate();

    // Logic to 'only show meaks that fit plan needs to be implemented
    return (
    <main>
        <h1 className='page-title'>Popular Meals This Week</h1>
            <div>
                <button className='meals-for-plan-btn'>Only Show Meals That Fit With Meal Plan</button>
                {/*Logic to display meals should go here:*/}
            </div>
                <button classsName='back-page-btn'onClick={() => navigate("/mealsOfDay")}>Back to Meals of the Day</button>
            <div>
                <button onClick={() => navigate("/")}>Home</button>
            </div>
    </main>
    );

}

export default PopularMealsWeek;