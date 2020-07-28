const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/amazonClone", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((connect) => {
    console.log("DB connected ");
  })
  .catch((error) => {
    console.log(error);
  });
