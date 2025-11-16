const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const app = express();
const db = new Database("local.db");

app.use(cors());
app.use(express.json());

// Creates a table setup for SQL database
db.prepare(`
	CREATE TABLE IF NOT EXISTS config (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	dietary TEXT NOT NULL,
	ingredients TEXT NOT NULL
	)
`).run();

// Test table
const name = "Brownies";
const dietary = "450 Cal, not dairy-free, not egg-free";
const ingredients = "chocolate milk vegetable-oil egg";

const rowCount = db.prepare("SELECT COUNT(*) AS count FROM config").get().count;
if (rowCount === 0) {
	const insert = db.prepare("INSERT INTO config (name, dietary, ingredients) VALUES (?, ?, ?)");

	insert.run(name, dietary, ingredients);
}
