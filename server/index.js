const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const app = express();
const db = new Database("local.db");

app.use(cors());
app.use(express.json());

// Creates a test table
db.prepare(`
	CREATE TABLE IF NOT EXISTS config (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	dietary TEXT NOT NULL,
	ingredients TEXT NOT NULL
	)
`).run();
