import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Prefrences.css';


const Prefrences = () => {
    const[userPrefrence, setUserPrefrence] = useState([]);
    const[allergies, setAllergies] = useState([]);
    const[newAllergie, setNewAllergie] = useState([]);
    const[diet, setDiet] = useState(null);

    const navigate = useNavigate();

    const handleInput = (e) => {
        setNewAllergie(e.target.value);
    };

    const handleAddAllergie = () => {
            {/* Add new allergies to list */}
            if(!newAllergie.trim()) return;
            setAllergies(prev => [...prev, newAllergie.trim()]);
            setNewAllergie("");
        
    };

    {/* Delete Allergy from list */}
    const handleDeleteAllergie = (indexToRemove) => {
        setAllergies(prev => prev.filter((_, index) => index !== indexToRemove));
    };


    return (
    <>
        <div className='general-background-container' />
        <div className='page-content'>
            <div className='prefrence-page'>
                <div>
                    <h1 className='page-title'>Set Your Meal Prefrences</h1>
                    {/*Change diet buttons (syntax/logic may be wrong (TESTING NEEDED) */}
                    <button className={`vegan-btn ${ diet === "vegan" ? "clicked" : "" }`} 
                    onClick={() => setDiet(prev => (prev === "vegan" ? null : "vegan"))}>Vegan Only</button>
                    <button className={`vegetarian-btn ${ diet === "vegetarian" ? "clicked" : "" }`} 
                    onClick={() => setDiet(prev => (prev === "vegetarian" ? null : "vegetarian"))}>Vegetarian Only</button>
                </div>

                <div className='allergy-container'>
                <p className="list-title">List Of Allergies:</p>

                <div style={{ display: "flex", gap: "8px", marginBottom: "8px"}}>
                    <input className='allergy-box'
                    type="text"
                    value={newAllergie}
                    onChange={handleInput}
                    placeholder="Add a new allergy"
                    />
                    {/* Button that adds allergies to List */}
                    <button className='add-btn' onClick={handleAddAllergie}>Add</button>
                </div>
                {/* List that holds all allergies */}

                <ul classNamee='alergy-box' 
                style={{ position: "relative", bottom: "-15px", listStyleType: 'none', padding: 0, margin: 0, color: 'black',}}>
                    {allergies.map((allergies, index) => (
                        <li
                        key={index} 
                        style={{ display: "flex", allignItems: "center", 
                        gap: "4px", margin: '2px 0',fontWeight: "bold"}}>
                        {/* Button that deletes from List */}
                        <button className='delete-btn' onClick={() => handleDeleteAllergie(index)}>x</button>
                        <span>{allergies}</span>
                        </li>
                    ))}
                </ul>
                </div>
                <button className='nav-btn' onClick={()=> navigate("/myGoals")}>Back to Goals</button>
                {/* For testing */}
                <button className='nav-btn' onClick={() => navigate("/")}>Home</button>
            </div>
        </div>
    </>
    );
    
    };

    export default Prefrences;
