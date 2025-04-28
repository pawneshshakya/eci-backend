const checkRole = (roles) => (req, res, next) => {
  console.log(">>>>>>>", roles);
  if (!roles.includes(roles)) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

module.exports = { checkRole };
