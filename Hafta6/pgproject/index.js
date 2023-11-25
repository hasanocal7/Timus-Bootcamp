const express = require("express");
const morgan = require("morgan");
const { Pool } = require("pg");
const app = express();

const pool = new Pool({
  connectionString:
    "postgres://mgyphqbh:sNHtgjFvMvEw07OpOZwWQP_12s6KO2Py@flora.db.elephantsql.com/mgyphqbh",
});
app.use(express.json());

pool.query(
  `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
)`,
  (err, result) => {
    if (err) console.error(err);
  }
);

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("DB CONNECTED");
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("Query result:", result.rows[0]);
  });
});

app.get("/", (req, res) => {
  res.send("Hello Pg");
});

app.post("/users", (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) {
      throw new Error("Username or email doesn't exist");
    }

    pool.query(
      "INSERT INTO users (username, email) VALUES ($1, $2)",
      [username, email],
      (err, result) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ message: "Internal Server Error" });
        }

        res.json({ user: req.body });
      }
    );
  } catch (error) {
    res.status(400).json({
      message: error.message,
      stack: error.stack,
    });
  }
});

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users;", (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    res.json({ users: result.rows });
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  pool.query("SELECT * FROM users WHERE id=$1;", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ users: result.rows });
  });
});

app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;

  pool.query(
    "UPDATE users SET username=$1, email=$2 WHERE id=$3;",
    [username, email, id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      if (result.rowCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: `${id} was updated` });
    }
  );
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  pool.query("DELETE FROM users WHERE id=$1;", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).json({ message: `${id} was deleted` });
  });
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});

// Folder Structure
