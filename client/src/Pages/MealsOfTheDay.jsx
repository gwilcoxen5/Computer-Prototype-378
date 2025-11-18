import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/meals"; // change to 5001,5002, whatver it is

export default function MealsOfTheDay() {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMeals() {
      try {
        console.log("Fetching from:", API_URL);
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error("Request failed: " + res.status);
        }

        const data = await res.json();
        console.log("Meals from API:", data);
        setMeals(data);
      } catch (err) {
        console.error("Error loading meals:", err);
        setError("Could not load meals.");
      }
    }

    loadMeals();
  }, []);

  return (
    <main className="meals-page">
      <h1>Meals of the Day</h1>

      <div className="meal-buttons">
        <button className="breakfast-btn">Breakfast</button>
        <button className="lunch-btn">Lunch</button>
        <button className="dinner-btn">Dinner</button>
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
  );
}
