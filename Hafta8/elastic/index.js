const express = require("express");
const client = require("./elastic-client");
require("express-async-errors");

const app = express();

app.use(express.json());

const createIndex = async (indexName) => {
  await client.indices.create({ index: indexName });
};

app.get("/", (req, res) => {
  res.send("Hello");
});

//createIndex("posts");

app.post("/posts", async (req, res) => {
  const post = await client.index({
    index: "posts",
    id: "postId",
    document: {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
    },
  });
  res.status(201).send(post);
});

app.get("/posts", async (req, res) => {
  const posts = await client.search({
    index: "posts",
    body: {
      query: {
        query_string: {
          query: { author: req.query.author },
        },
      },
    },
  });
  res.send(posts);
});

app.delete("/posts", async (req, res) => {
  const result = await client.delete({
    index: "posts",
    id: "postId",
  });
  res.send(result);
});

app.listen(3000, () => {
  console.log(`Server is running http://localhost:3000`);
});
