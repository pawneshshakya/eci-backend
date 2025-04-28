const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "your-jwt-secret", { expiresIn: "1d" });
};

module.exports = generateToken;
