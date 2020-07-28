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

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          category: req.body.category,
          phone: req.file.location,
          description: req.body.description,
          owner: req.body.ownerId,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateProduct: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    console.log(req.params.id);
    const productDelete = await Product.findOneAndDelete({
      _id: req.params.id,
    });
    if (productDelete) {
      res.json({
        success: true,
        message: "Successful",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
