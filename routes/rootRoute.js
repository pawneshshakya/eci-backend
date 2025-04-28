// routes/rootRoutes.js
const express = require("express");
const userRouter = require("./userRoutes");
const authRouter = require("./authRoutes");
const router = express.Router();

// Define a simple route for the root API
router.use("/auth", authRouter);
router.use("/users", userRouter);

module.exports = router;
