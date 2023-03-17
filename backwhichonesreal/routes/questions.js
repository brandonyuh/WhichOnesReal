const express = require("express");
const router = express.Router();
const data = require("../data/questions.json");

router.get("/", (req, res) => {
  res.json(
    data.map((question) => ({
      id: question.id,
      lefturl: question.lefturl,
      righturl: question.righturl,
      isleftcorrect: question.isleftcorrect,
    }))
  );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const question = data.find((question) => question.id === id);

  if (question) {
    res.json({
      id: question.id,
      lefturl: question.lefturl,
      righturl: question.righturl,
      isleftcorrect: question.isleftcorrect,
    });
  } else {
    res.status(404).send("No questions found!");
  }
});

module.exports = router;
