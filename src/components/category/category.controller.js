const Category = require("./category.model");

exports.createCategory = async (req, res) => {
  try {
    const { type } = req.body;

    const category = new Category({
      type,
    });

    await category.save();
    res.json({
      success: true,
      message: "successfully saved",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//get getCategories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({
      success: true,
      categories,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
