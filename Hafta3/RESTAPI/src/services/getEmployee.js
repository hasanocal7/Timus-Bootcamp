const { dbRead } = require("../utils/db");

const getEmployee = async (id) => {
  const db = await dbRead();
  const employees = db.employees;
  const employee = employees.find((employee) => employee.id == id);
  if (employee) {
    return employee;
  } else {
    throw new Error(`Employee not found`);
  }
};

module.exports = { getEmployee };
