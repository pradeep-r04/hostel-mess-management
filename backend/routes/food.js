const express = require("express");
const db = require("../db");
const QRCode = require("qrcode");

const router = express.Router();

// Select Food & Generate QR
router.post("/order", async (req, res) => {
  const { user_id, food_items } = req.body;

  db.query("INSERT INTO orders (user_id, food_items) VALUES (?,?)",
    [user_id, JSON.stringify(food_items)],
    async (err, result) => {
      if (err) return res.status(500).json({ error: err });

      const qrData = {
        user_id,
        food_items,
        order_id: result.insertId,
        time: new Date().toISOString()
      };

      const qrImage = await QRCode.toDataURL(JSON.stringify(qrData));
      res.json({ message: "Order placed", qr: qrImage });
    }
  );
});

module.exports = router;
