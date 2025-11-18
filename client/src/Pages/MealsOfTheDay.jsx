import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "../Styling/MealOfTheDay.css";
import "../Styling/Prefrences.css";

const API_URL = "http://localhost:5000/api/meals";

export default function MealsOfTheDay() {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");

  useEffect(() => {
    async function loadMeals() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Request failed: " + res.status);

        const data = await res.json();
        setMeals(data);
      } catch (err) {
        setError("Could not load meals.");
      }
    }

    loadMeals();
  }, []);

  return (
    <>
      <div className='general-background-container' />
      <div className='page-content'>
        
        <main className="meals-page">
          <h1>Meals of the Day</h1>

          <div className="meal-buttons">
            <button
              className={`breakfast-btn ${selectedMeal === "breakfast" ? "clicked" : ""}`}
              onClick={() => setSelectedMeal("breakfast")}
            >
              Breakfast
            </button>

            <button
              className={`lunch-btn ${selectedMeal === "lunch" ? "clicked" : ""}`}
              onClick={() => setSelectedMeal("lunch")}
            >
              Lunch
            </button>

            <button
              className={`dinner-btn ${selectedMeal === "dinner" ? "clicked" : ""}`}
              onClick={() => setSelectedMeal("dinner")}
            >
              Dinner
            </button>
          </div>

          <p className="popular-meals-tab">Check Popular Meals This Week</p>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <ul style={{ marginTop: "1rem" }}>
            {meals.map((meal) => (
              <li key={meal.id}>
                <strong>{meal.name}</strong> – {meal.dietary}
              </li>
            ))}
          </ul>

          <button className="home-button" onClick={() => navigate("/")}>
            Home
          </button>
        </main>

      </div>
    </>
  );
}
