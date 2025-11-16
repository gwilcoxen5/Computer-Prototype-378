const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const app = express();
const db = new Database("local.db");

app.use(cors());
app.use(express.json());

