module.exports = (req, res, next) => {
  try {
    const token = req.headers["accesstoken"];
    if (!token) {
      res.status(401);
      throw new Error("No Authorization");
    }
    next();
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
