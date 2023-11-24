const { dbRead, dbWrite } = require("../utils/db");

const deleteEmployee = async (id) => {
  const db = await dbRead();
  const employeeIndex = db.employees.findIndex((employee) => employee.id == id);
  if (employeeIndex != -1) {
    db.employees.splice(employeeIndex, 1);
    dbWrite(db);
    return employeeIndex;
  } else {
    throw new Error(`Employee not found`);
  }
};

module.exports = { deleteEmployee };
