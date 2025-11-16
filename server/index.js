const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const app = express();
const db = new Database("local.db");

app.use(cors());
app.use(express.json());

// Creates a table setup for SQL database
// name : name of the meal
// dietary : quick dietary information like caloric value
// ingredients : space delineated list of ingredients
// plan : what plan for which this meal is applicable
// type : whether the meal is a breakfast, lunch, or dinner food
db.prepare(`
	CREATE TABLE IF NOT EXISTS config (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	dietary TEXT NOT NULL,
	ingredients TEXT NOT NULL,
	plan TEXT NOT NULL,
	type TEXT NOT NULL
	)
`).run();

// Adds tables to SQL database
const rowCount = db.prepare("SELECT COUNT(*) AS count FROM config").get().count;
if (rowCount === 0) {
	const insert = db.prepare("INSERT INTO config (name, dietary, ingredients, plan, type) VALUES (?, ?, ?, ?, ?)");

	insert.run("Brownies", "450 Cal, not dairy-free, not egg-free", "eggs milk chocolate flour oil butter", "gain", "dinner");
	insert.run("Apple", "950 Cal, organic", "apple", "maintain", "lunch");
}

// GET route
app.get("/api/config", (req, res) => {
	const rows = db.prepare("SELECT * FROM config ORDER BY id ASC").all();
	res.json(rows);
});

// For just one row...
app.get("/api/config/:id", (req, res) => {
	const id = req.params.id;
	const row = db.prepare("SELECT * FROM config WHERE id = ?").get(id);
	if (!row) return res.status(404).json({ error: "not found"});
	res.json(row);
});

app.listen(4000, () => {
	console.log(`API running at http://localhost:4000`);
});
