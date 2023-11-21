const { dbRead, dbWrite } = require("../utils/db");

const updateEmployee = async (id, name, age, stillEmployee) => {
  const db = await dbRead();
  const employeeIndex = db.employees.findIndex((employee) => employee.id == id);
  if (employeeIndex != -1) {
    const updatedEmployee = {
      id: id,
      name: name,
      age: age,
      stillEmployee: stillEmployee,
    };
    db.employees[employeeIndex] = updatedEmployee;
    dbWrite(db);
    return updatedEmployee;
  } else {
    throw new Error("Employee not found");
  }
};

module.exports = { updateEmployee };
