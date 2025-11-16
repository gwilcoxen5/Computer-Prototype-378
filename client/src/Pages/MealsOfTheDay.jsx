import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const [rows, setRows] = useState([]);

useEffect(() => {
	fetch("http://localhost:4000/api/meal")
		.then(res => res.json())
		.then(data => setRows(data));
		.catch(console.error);
}. []);

const MealsOfTheDay = () => {

    const navigate = useNavigate();
    // Logic to host meals needed here 
    return (
        <main>
            <h1 className='meal-of-day-title'>Meals of the Day</h1>
        {/* Logic to show different types of food on button click goes here */}
		<ul>
			{rows.map(row => (
				<li key={row.id}>
					<strong>{row.name}</strong> - {row.dietary}
				</li>
			))}
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
