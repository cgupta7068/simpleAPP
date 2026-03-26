const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: { type: String, unique: true },
  picture: String,
  password: String,
  country: String
});

module.exports = mongoose.model("User", userSchema);