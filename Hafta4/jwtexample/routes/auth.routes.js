const router = require("express").Router({ mergeParams: true });

router.post("/login", (req, res) => {
  res.status(200).send("Login");
});

module.exports = router;
