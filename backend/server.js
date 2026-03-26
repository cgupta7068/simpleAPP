require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL || "*"
}));

app.use(express.json());
app.use(authMiddleware);

app.use("/api/auth", authRoutes);

// profile route
app.get("/api/profile", async (req, res) => {
  try {
    if (!req.user) {
      return res.json({
        name: "Anonymous",
        id: "guest_user"
      });
    }

    const user = await User.findById(req.user.id).select('name email country');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      name: user.name,
      email: user.email,
      country: user.country,
      id: user._id
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(5000, () => console.log("Server running"));