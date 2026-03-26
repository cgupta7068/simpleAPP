import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: { type: String, unique: true },
  picture: String,
  password: String,
  country: String
});

const User = mongoose.model("User", userSchema);

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
};

const getUserFromToken = (req) => {
  const header = req.headers.authorization;
  if (!header) return null;
  try {
    const token = header.split(" ")[1];
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await connectDB();

  try {
    const userDecoded = getUserFromToken(req);
    if (!userDecoded) {
      return res.json({
        name: "Anonymous",
        id: "guest_user"
      });
    }

    const user = await User.findById(userDecoded.id).select('name email country');
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
}