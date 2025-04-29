const User = require("../models/userModel");

// Get all users (for admin only)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "All users get successfully",
      data: users,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update user role
const updateUserRole = async (req, res) => {
  const { userId, newRole } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = newRole;
    await user.save();

    res.json({ message: "User role updated", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Block or unblock a user
const toggleUserStatus = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(200).json({ message: "User not found" });
    }

    user.isBlocked = user.isBlocked === "1" ? "0" : "1";
    await user.save();

    res.json({
      message: `User status changed to ${
        user.isBlocked === "1" ? "unblocked" : "blocked"
      }`,
      user,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getUsers, updateUserRole, toggleUserStatus };
