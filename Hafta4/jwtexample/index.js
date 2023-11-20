const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.use("/api", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is running..."));
