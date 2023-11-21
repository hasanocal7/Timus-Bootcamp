const { dbRead } = require("../utils/db");

const getAllEmployees = async () => {
  const db = await dbRead();
  const employees = db.employees;
  return employees;
};

module.exports = { getAllEmployees };
