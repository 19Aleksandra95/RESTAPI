const userSchema = require("../models/users");

async function register(req, res, next) {
  const { name, email, password } = req.body;
  try {
    await User.create({ name, email, password });
    res.send("Register");
  } catch (error) {
    res.status(error);
  }
}

module.exports = { register };
