const express = require("express");
const questions = require("./routes/questions");
const port = 9090;
const app = express();
const cors = require("cors");
app.use(express.static("public"));

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/questions", questions);

app.get("/", (req, res) => {
  res.send("i got it");
});

app.listen(port, console.log(`Express is listening to ${port}`));
