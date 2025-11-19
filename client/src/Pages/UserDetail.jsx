import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";
import '../Styling/UserDetail.css';


const userDetail = () => {
    const[userGoal, setUserGoal] = useState("");
    const[currentWeight, setCurrentWeight] = useState();
    const[desiredWeight, setDesiredWeight] = useState();
    const[timeInterval, setTimeInterval] = useState({amount: 0, unit: 'weeks',});
    const[activeButton, setActiveButton] = useState(null);

    const navigate = useNavigate();

    const handleAmountPrompt = (e) => {
        const amount = Number(e.target.value);
            setTimeInterval((prev) => ({
                ...prev,
                amount,
            }));
    
    };
        
        const handleUnitChange = (e) => {
            const unit = e.target.value;
            setTimeInterval((prev) => ({
                ...prev,
                unit,
            }));
        };


    // Logic for taking user input for account would go here

    return (
    <>
        <div className='general-background-container' />

        <div className='page-content'>
            <main className='user-detail-page'>
                <h1 className="page-title">Set Your Meal Plan Goals</h1>
                <h2 className="goal-choice-prompt">Set Overall Goal:</h2>

                <div>
                    <h3 className='selected-goal-display'>Selected Goal:</h3>
                    <p className='goal-choice'>{userGoal|| "None Selected yet"}</p>
                </div>

                <div className='goal-choice-container'>
                    <button className={`weight-gain-btn ${ userGoal === "Weight Gain" ? "clicked" : "" }`} onClick={() => setUserGoal("Weight Gain")}>Weight Gain</button>
                    <button className={`weight-maintain-btn ${ userGoal === "Weight Maintain" ? "clicked" : "" }`} onClick={() => setUserGoal("Weight Maintain")}>Weight Maintain</button> 
                    <button className={`weight-loss-btn ${userGoal === "Weight Loss" ? "clicked" : "" }`} onClick={() => setUserGoal("Weight Loss")}>Weight Loss</button>
                </div>

                <div className="info-form">
                    <div>
                        <label className="current-weight-prompt">Set your current weight</label>
                        <input
                            type="number"
                            id="currentWeight"
                            value={currentWeight}
                            onChange={(e) => setCurrentWeight(Number(e.target.value))}
                            placeholder='Ex: 100'
                        />
                        <span className='tail-text'> lbs</span>
                    </div>
                
                <div>
                    <label className="desired-weight-prompt">Set your desired weight</label>
                    <input
                        type="number"
                        id="desiredWeight"
                        value={desiredWeight}
                        onChange={(e) => setDesiredWeight(Number(e.target.value))}
                        placeholder='Ex: 100'
                    />
                    <span className='tail-text'> lbs</span>
                </div>

                <div>
                    <label className="time-interval-prompt">Set desired time intverval (weeks)</label>
                    <div className="time-interval-dropdown">
                      
                        <select 
                            className="time-interval-select"
                            value={timeInterval.amount}
                            onChange={handleAmountPrompt}
                        >
                            {Array.from({ length: 32 }, (_, i) => (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>

                      
                        <select
                            className='time-interval-select'
                            value={timeInterval.unit}
                            onChange={handleUnitChange}
                        >
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                            <option value="years">Years</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    
                </div>
                </div>
               
                <div className='nav-container'>
                <button className="back-goal-btn" onClick={() => navigate("/myGoals")} >Back to Goal</button>
                <button className="prefrence-btn" onClick={() => navigate("/prefrences")}>Prefrences</button>
                <button className='home-btn' onClick={() => navigate("/")}>Home</button>
                </div>

            </main>
        </div>
    </>
    );
};

export default userDetail;