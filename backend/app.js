const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const foodRoutes = require("./routes/food");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/food", foodRoutes);
app.use("/admin", adminRoutes);





app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
