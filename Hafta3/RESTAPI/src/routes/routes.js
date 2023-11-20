const router = require("express").Router();
const employeeRoute = require("./employee.routes");
const userController = require("../controllers/user.controller");
const beforeLogin = require("../middlewares/beforeLogin");

router.use("/employees", employeeRoute);
router.post("/", beforeLogin, userController.loginUser);

module.exports = router;
