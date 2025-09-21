const express = require("express");
const db = require("../db");

const router = express.Router();

// Admin Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM admins WHERE username = ?", [username], (err, rows) => {
    if (err || rows.length === 0) {
      return res.status(401).json({ success: false, message: "Invalid username" });
    }

    const valid = (password === rows[0].password); // (can later use bcrypt)
    if (!valid) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    res.json({ success: true, message: "Admin login successful" });
  });
});

// Get All Orders
router.get("/orders", (req, res) => {
  db.query(
    `SELECT o.id, u.name, u.enrollment_no, u.mess_id, o.food_items, o.order_time
     FROM orders o
     JOIN users u ON o.user_id = u.id
     ORDER BY o.order_time DESC`,
    (err, results) => {
      if (err) return res.status(500).json(err);

      const formatted = results.map(row => ({
        id: row.id,
        name: row.name,
        enrollment_no: row.enrollment_no,
        mess_id: row.mess_id,
        food_items: JSON.parse(row.food_items),
        order_time: row.order_time
      }));

      res.json(formatted);
    }
  );
});



module.exports = router;
