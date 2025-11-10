import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Prefrences = () => {
    const[allergies, setAllergies] = useState([]);
    const[newAllergie, setNewAllergie] = useState([]);
    const[isVegan, setIsVegan] = useState(false);
    const[isVegetarian, setIsVegetarian] = useState(false);

    const navigate = useNavigate();

    const handleInput = (e) => {
        setNewAllergie(e.target.value);
    };

    const handleAddAllergie = () => {
        if(newAllergie.trim() !== '') {
            {/* Add new allergies to list */}
            setAllergies([...allergies, newAllergie]);
            setNewAllergie('');
            {/* Remove allergy from list */}
        }
    };

    return (
        <div>
            <div>
                <h1>Set Your Meal Prefrences</h1>
                {/*Change diet buttons (syntax/logic may be wrong (TESTING NEEDED) */}
                <button className='vegan-btn' onClick={() => setIsVegan(true)}>Vegan Only</button>
                <button className='vegetarian-btn' onClick={() => setIsVegetarian(true)}>Vegetarian Only</button>
            </div>
            <p1 className="list-title">List Of Allergies:</p1>
            <div>
                <input 
                type="text"
                value={newAllergie}
                onChange={handleInput}
                placeholder="Add a new allergy"
                />
                {/* Button that adds allergies to list */}
                <button onClick={handleAddAllergie} style= {{ padding: '8px 12px'}}>Add</button>
            </div>
            {/* List that holds all allergies */}
            <ul style={{ listStyleType: 'none', padding: 0}}>
                {allergies.map((allergies, index) => (
                    <li key={index} style={{ padding: '5px 0', boarderBottom: '1px dotted #eee'}}>
                        {allergies}
                    </li>
                ))}
            </ul>
            <button className='back-goal-btn' onClick={()=> navigate("/myGoals")}>Back to Goals</button>
            {/* For testing */}
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
    
    };

    export default Prefrences;
