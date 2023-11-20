const router = require("express").Router();
const employeeController = require("../controllers/employee.controller");

router.route("/").post(employeeController.postEmployee);

module.exports = router;
