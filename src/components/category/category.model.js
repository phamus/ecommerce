const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    type: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
