const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: "https://myproject.es.europe-west3.gcp.cloud.es.io", // Elasticsearch endpoint
  auth: {
    username: "elastic",
    password: "vQU1xAxwXNM709IDBzMdkOXg",
  },
});

module.exports = client;
