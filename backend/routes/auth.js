const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  const { name, mobile, enrollment_no, faculty_id, mess_id, course, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name, mobile, enrollment_no, faculty_id, mess_id, course, password) VALUES (?,?,?,?,?,?,?)",
    [name, mobile, enrollment_no, faculty_id, mess_id, course, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "User registered successfully!" });
    }
  );
});

// Login User
router.post("/login", (req, res) => {
  const { enrollment_no, name, password } = req.body;
  db.query("SELECT * FROM users WHERE enrollment_no = ? AND name = ?", [enrollment_no, name], async (err, rows) => {
    if (err || rows.length === 0) return res.status(401).json({ error: "Invalid credentials" });
    const valid = await bcrypt.compare(password, rows[0].password);
    if (!valid) return res.status(401).json({ error: "Invalid password" });
    res.json({ message: "Login successful", user: rows[0] });
  });
});

module.exports = router;
