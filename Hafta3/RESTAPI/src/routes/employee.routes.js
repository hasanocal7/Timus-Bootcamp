const router = require("express").Router();
const employeeController = require("../controllers/employee.controller");
const authentication = require("../middlewares/authentication");
const beforeCreateEmployee = require("../middlewares/validateEmployee");

router.use(authentication);
router.route("/").post(beforeCreateEmployee, employeeController.postEmployee);
router.route("/").get(employeeController.getEmployees);
router.route("/:id").get(employeeController.getOneEmployee);
router.route("/:id").delete(employeeController.removeEmployee);
router
  .route("/:id")
  .put(beforeCreateEmployee, employeeController.changeEmploye);

module.exports = router;
