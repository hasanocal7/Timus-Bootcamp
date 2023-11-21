const validationEmployee = require("../../validations/validationEmployeeObject");

const validateEmployee = (req, res, next) => {
  try {
    const { name, age, stillEmployee } = req.body;
    validationEmployee(name, age, stillEmployee);
    next();
  } catch (error) {
    res.status(400);
    res.json({
      title: "Validation Error",
      message: error.message,
    });
  }
};

module.exports = validateEmployee;
