const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    name: { type: String },
    about: { type: String },
    photo: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Owner", ownerSchema);
