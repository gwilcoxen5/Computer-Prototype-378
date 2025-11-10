import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const userDetail = () => {
    const[goal, setGoal] = useState();
    const[currentWeight, setCurrentWeight] = useState();
    const[desiredWeight, setDesiredWeight] = useState();
    const[timeInterval, setTimeInterval] = useState();

    const navigate = useNavigate();

    // Logic for taking user inpit for account would go here

    return (
        <main>
            <h1 className="page-title">Set Your Meal Plan Goals</h1>
            <div>
                <label className="current-weight-prompt">Set your current weight</label>
                   <input
                    type="currentWeight"
                    id="currentWeight"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Set your desired weight</label>
                    <input
                    type="desiredWeight"
                    id="desiredWeight"
                    value={desiredWeight}
                    onChange={(e) => setDesiredWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Set desired time intverval (weeks)</label>
                    {/* Potential drop down menu for time interval */}

            </div>
            <div>
                <label>Difficulty: </label>
                    {/* Logic to determine difficulty would go here */}
            </div>
            {/* Navigation Buttons */}
            <button className="back-goal-btn" onClick={() => navigate("/myGoals")} >Back to Goal</button>
            <button className="prefrence-btn" onClick={() => navigate("/prefrences")}>Prefrences</button>
            {/* For testing */}
            <button onClick={() => navigate("/")}>Home</button>
        </main>
    );
};

export default userDetail;