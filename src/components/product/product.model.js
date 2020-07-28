const mongoose = require("mongoose");
const Object = mongoose.Schema;
const productSchema = new mongoose.Schema(
  {
    category: { type: Object.Types.ObjectId, ref: "category" },
    owner: { type: Object.Types.ObjectId, ref: "owner" },
    title: { type: String },
    description: { type: String },
    photo: { type: String },
    price: { type: Number },
    stockQuantity: { type: Number },
    rating: [Number],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
