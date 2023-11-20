const express = require("express");

const authRoute = require("./auth.route");
const employeeRoute = require("./employee.route");
const bardakRoute = require("./bardak.route");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/employee", employeeRoute);
router.use("/urun", bardakRoute);

module.exports = router;
