import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Goals.css';

{/* All variables below is for test input (ADD LOGIC LATER) */}
const CURRENT_GOAL = "Weight Loss";
const STARTING_WEIGHT = 220;
const END_GOAL = 190;
const CURRENT_WEIGHT = 202;



const Goals = () => {
    const[currentGoal, setCurrentGoal] = useState("");
    const[startingWeight, setStartingWeight] = useState("");
    const[endGoal, setEndGoal] = useState("");

    const navigate = useNavigate();

	//TODO: Get an actual meal recommendation
	const [row, setRow] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/api/config/1")
			.then(res => res.json())
			.then(data => setRow(data));
	}, []);

return ( 
    <>
        <div className='general-background-container' />

        <div className='page-content'>
            <main className='goals-page'>
                <h1 className='goals-title'>My Goals</h1>
                <h2 className='current-text'>Current Goal: {CURRENT_GOAL}</h2>
            <div>
                {/* Progress bar logic goes here */}
                <d1 className='start-weight-section'>Starting Weight: {STARTING_WEIGHT}lbs</d1>
            </div>
            <div>
                <d1 className='end-goal-section'>End Goal: {END_GOAL}lbs</d1>
            </div>
            <div> 
                <d1 className='current-weight-section'>Current Weight: {CURRENT_WEIGHT}lbs</d1>
            </div>
            
            <div className='goal-meal-buttons'>
            <button className='goal-meal-btn' onClick={() => navigate("/mealsOfDay")}>Meals of the Day</button>
            <button className='change-pref-btn' onClick={() => navigate("/prefrences")}>Meal Plan Change</button>
            </div>

            {/* Recconmended Meal Section (Logic Needed) */}
            <h1 className='reconmend-title'>Reconmended Meal:</h1>
            <section className='reconmend-section'>
                <div>
                    <strong>{row.name}</strong> - {row.dietary}
                </div>
            </section>
            </main>
        </div>  
    </>
);
};

export default Goals;
