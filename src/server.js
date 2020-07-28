const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const product = require("./components").product;
const category = require("./components").category;
const owner = require("./components").owner;
require("./db");

const app = express();

// Middleware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/product", product.routes);
app.use("/api/category", category.routes);
app.use("/api/owner", owner.routes);
app.listen(5000, (err) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("Connected at port 5000");
  }
});
