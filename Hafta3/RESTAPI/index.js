const express = require("express");
const router = require("./src/routes/routes");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/api/v1", router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is runnig on port: ${port}`);
});
