const { createEmployee } = require("../services/index");
const generate = require("../utils/generate");

const postEmployee = async (req, res) => {
  try {
    const { name, age, stillEmployee } = req.body;
    const id = generate(10);
    const employee = await createEmployee(id, name, age, stillEmployee);
    res.status(200);
    res.json({
      message: "Employee created successfuly",
      employee: employee,
    });
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = { postEmployee };
