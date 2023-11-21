const {
  getAllEmployees,
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../services/index");

const generate = require("../utils/generate");

const postEmployee = async (req, res) => {
  try {
    const { name, age, stillEmployee } = req.body;
    const id = generate(25);
    const employee = await createEmployee(id, name, age, stillEmployee);
    res.status(200);
    res.json({
      message: "Employee created successfuly",
      employee: employee,
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: error.message,
    });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.status(200).json({
      employees: employees,
    });
  } catch (error) {
    res.status(500);
    res.json({
      message: error.message,
    });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await getEmployee(id);
    if (!employee) {
      throw new Error("Employee not found");
    }
    res.status(200).json({
      employee: employee,
    });
  } catch (error) {
    res.status(404);
    res.json({
      message: error.message,
    });
  }
};

const removeEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const removed = await deleteEmployee(id);
    if (removed !== -1) {
      res.status(200).json({
        message: `${id} was removed`,
      });
    } else {
      throw new Error("Employee not found");
    }
  } catch (error) {
    res.status(404);
    res.json({
      message: error.message,
    });
  }
};

const changeEmploye = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age, stillEmployee } = req.body;
    const employee = await updateEmployee(id, name, age, stillEmployee);
    if (!employee) {
      throw new Error("Employee not found");
    }
    res.status(200).json({
      message: `${employee.name} was updated`,
      employee: employee,
    });
  } catch (error) {
    res.status(404);
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  postEmployee,
  getEmployees,
  getOneEmployee,
  removeEmployee,
  changeEmploye,
};
