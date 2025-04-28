const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, username, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(200).json({ message: "User already exists" });
  }

  const user = new User({
    name,
    email,
    username,
    password: await bcrypt.hash(password, 10),
  });

  await user.save();
  res.status(201).json({
    message: "User registered successfully",
    data: user,
  });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    token: generateToken(user._id),
  });
};

module.exports = { registerUser, loginUser };
