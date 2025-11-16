import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const PopularMealsWeek =() => {

    const navigate = useNavigate();

	//TODO: Get only meals that fit plan
	const [rows, setRows] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/api/config")
			.then(res => res.json())
			.then(data => setRows(data))
			.catch(console.error);
	}, []);

    return (
    <main>
        <h1 className='page-title'>Popular Meals This Week</h1>
            <div>
                <button className='meals-for-plan-btn'>Only Show Meals That Fit With Meal Plan</button>
		<ul>
			{rows.map(row => (
				<li key={row.id}>
					<strong>{row.name}</strong> - {row.dietary}
				</li>
			))}
		</ul>
            </div>
                <button classsName='back-page-btn'onClick={() => navigate("/mealsOfDay")}>Back to Meals of the Day</button>
            <div>
                <button onClick={() => navigate("/")}>Home</button>
            </div>
    </main>
    );

}

export default PopularMealsWeek;
