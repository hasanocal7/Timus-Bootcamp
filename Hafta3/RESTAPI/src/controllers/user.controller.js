const generateToken = require("../utils/generate");

const loginUser = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email == "admin@timus.com" && password == "123") {
      const accessToken = generateToken(12);
      req.headers["accessToken"] = accessToken;
      req.headers["userEmail"] = email;
      res.status(200);
      res.json({
        message: "Login successfuly",
        accessToken,
      });
    } else {
      res.status(404);
      res.send("Invalid email or password");
    }
  } catch (error) {
    res.status(500);
    throw error;
  }
};

module.exports = { loginUser };
