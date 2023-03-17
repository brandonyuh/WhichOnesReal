const express = require("express");
const router = express.Router();
const data = require("../data/vote.json");
const fs = require("fs");

router.put("/:id", (req, res) => {
  const id = req.params.id;
  if (!data[id]) {
    data[id] = 1;
  } else {
    data[id]++;
  }
  fs.writeFileSync("./data/vote.json", JSON.stringify(data), (err) => {});
  res.send(`vote for ${id} increasing it to ${data[id]}`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  let result = 0;
  if (data[id]) {
    result = data[id];
  }
  res.send(`${result}`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = 0;
  if (data[id]) {
    data[id] = 0;
    fs.writeFileSync("./data/vote.json", "{}", (err) => {});
  }
  res.send(`${result}`);
});

module.exports = router;
