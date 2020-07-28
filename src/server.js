const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// Middleware

app.use(morgan("dev"));
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("Hello Amazone clone");
});

app.listen(5000, (err) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("Connected");
  }
});
