const express = require("express");
const { checkRole } = require("../middlewares/roleMiddleware");
const { protect } = require("../middlewares/authMiddleware");
const {
  getUsers,
  updateUserRole,
  toggleUserStatus,
} = require("../controllers/userController");

const router = express.Router();

// Admin-only routes
router.get("/getUserList", protect, checkRole("admin"), getUsers);
router.put("/updateUserRole", protect, checkRole("admin"), updateUserRole); // Update user role
router.put(
  "/toggleUserisBlocked",
  protect,
  checkRole("admin"),
  toggleUserStatus
); // Block/unblock user

module.exports = router;
