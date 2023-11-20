const Employee = require("../models/Employee");
const { dbRead, dbWrite } = require("../utils/db");

const createEmployee = async (id, name, age, stillEmployee) => {
  const employee = await Employee.validateAsync({
    id,
    name,
    age,
    stillEmployee,
  });
  const db = await dbRead();
  db.employees.push(employee);
  dbWrite(db);
  return employee;
};

module.exports = { createEmployee };
