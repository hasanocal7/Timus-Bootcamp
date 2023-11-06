const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

let users = [
  { name: "Hasan", id: 1 },
  { name: "Halil", id: 2 },
];

app.get("/users", (req, res) => {
  res.send(users);
});

/* app.use((req, res, next) => {
  if (req.get("token")) {
    console.log("GET REQUEST");
    next();
  } else {
    res.status(401);
    res.send("Unauthorized error");
  }
}); */

app.get("/user", (req, res) => {
  let user = users.find((item) => item.id == req.query.id);
  if (user) {
    res.json(user);
  } else {
    res.send("User not found");
  }
});

app.post("/data", (req, res) => {
  res.status(201);
  res.send(req.body);
});

app.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const newName = req.body.name;

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    res.status(404).send("User not found");
  } else {
    const existingUser = users[userIndex];

    if (existingUser.name === newName) {
      res.status(400).send("Same name");
    } else {
      existingUser.name = newName;
      res.send(existingUser);
    }
  }
});

app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id); // URL'den gelen kullanıcı kimliği

  // Kullanıcıyı bul
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    res.status(404).send("User not found");
  } else {
    users.splice(userIndex, 1);
    res.send("Delete");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Connected to Port: ${port}`);
});
