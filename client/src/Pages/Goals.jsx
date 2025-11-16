import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
	const [rows, setRows] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/api/config/1")
			.then(res => res.json())
			.then(data => setRow(data))
	}, []);

return ( 
    <main>
        <h1 className="goals-title">My Goals</h1>
        <div>
        <d1 classNane="current-title">Current Goal: {CURRENT_GOAL}</d1>
    </div> 
    <div>
        {/* Progress bar logic goes here */}
        <d1 className='start-weight-section'>Starting Weight {STARTING_WEIGHT}lbs</d1>
    </div>
    <div>
        <p1 className='end-goal-section'>End Goal: {END_GOAL}lbs</p1>
    </div>
    <div> 
        <d1 className='current-weight-section'>Current Weight: {CURRENT_WEIGHT}lbs</d1>
    </div>
    <button onClick={() => navigate("/mealsOfDay")}>Meals of the Day</button>
    <button onClick={() => navigate("/prefrences")}>Meal Plan Change</button>

    {/* Recconmended Meal Section (Logic Needed) */}
    <section>Reconmeded Meal:
		<div>
			<strong>{row.name}</strong> - {row.dietary}
		</div>
	</section>
    </main>
   
);
};

export default Goals;
