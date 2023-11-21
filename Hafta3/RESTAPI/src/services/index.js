const { createEmployee } = require("./createEmployee");
const { deleteEmployee } = require("./deleteEmployee");
const { getAllEmployees } = require("./getAllEmployees");
const { getEmployee } = require("./getEmployee");
const { updateEmployee } = require("./updateEmployee");

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployee,
  deleteEmployee,
  updateEmployee,
};
