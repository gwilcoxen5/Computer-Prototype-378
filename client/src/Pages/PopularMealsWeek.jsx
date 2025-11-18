import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styling/MealOfTheDay.css"; 
import "../Styling/PopularMeals.css";

const PopularMealsWeek = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [filterOn, setFilterOn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/api/config")
      .then((res) => res.json())
      .then((data) => setRows(data))
      .catch(console.error);
  }, []);

  return (
    <>

      <div className="general-background-container" />

    
      <div className="page-content">
        <main className="meals-page">
          <h1 className="page-title">Popular Meals This Week</h1>

          <div className="popular-meals-container">
            <button
              className={`meals-for-plan-btn ${filterOn ? "clicked" : ""}`}
              onClick={() => setFilterOn(!filterOn)}
            >
              Only Show Meals That Fit With Meal Plan
            </button>

            <ul className="popular-meals-list">
              {rows.map((row) => (
                <li key={row.id}>
                  <strong>{row.name}</strong> - {row.dietary}
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-buttons">
            <button
              className="back-page-btn nav-btn"
              onClick={() => navigate("/mealsOfDay")}
            >
              Back to Meals of the Day
            </button>

            <button className="home-btn nav-btn" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default PopularMealsWeek;
