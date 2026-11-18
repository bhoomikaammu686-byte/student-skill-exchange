const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "Bhoomi25",
    database: "student_skill_exchange"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("❌ MySQL connection failed:", err.message);
    } else {
        console.log("✅ MySQL connected successfully!");
    }
});

// Test Backend Route
app.get("/", (req, res) => {
    res.send("Student Skill Exchange Backend is Running!");
});

// Get all users from users25 table
app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users25";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(result);
    });
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});