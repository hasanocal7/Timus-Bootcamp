const fs = require("fs");

function dbRead() {
  const rawData = fs.readFileSync("db.json");
  const data = JSON.parse(rawData);
  return data;
}

function dbWrite(data) {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
}

module.exports = { dbRead, dbWrite };
