const validationEmail = require("../utils/validations/validationEmail");

module.exports = (req, res, next) => {
  try {
    const token = req.headers["accesstoken"];
    const userEmail = req.headers["useremail"];
    if (token && userEmail) {
      res.status(401);
      throw new Error("User already logged");
    }
    const { email } = req.body;
    if (validationEmail(email)) {
      next();
    } else {
      res.status(400);
      throw new Error("Invalid email");
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
