const Product = require("./product.model");
exports.createProduct = async (req, res) => {
  try {
    // console.log(req.body);
    const photo = req.file.location;
    const { title, description, stockQuantity } = req.body;
    const product = new Product({
      title,
      description,
      photo,
      stockQuantity,
    });
    await product.save();

    res.json({
      success: true,
      message: "successfully saved",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
