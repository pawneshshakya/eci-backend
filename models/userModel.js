const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: [
        "admin",
        "statecommission",
        "ceo",
        "deo",
        "ro",
        "aro",
        "sectorofficer",
        "blo",
        "voter",
      ],
      default: "voter",
    },
    isBlocked: {
      type: String,
      enum: ["0", "1"],
      default: "1",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
