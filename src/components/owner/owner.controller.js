const Owner = require("./owner.model");

exports.createOwner = async (req, res) => {
  try {
    const photo = req.file.location;
    const { name, about } = req.body;

    const owner = new Owner({
      photo,
      name,
      about,
    });
    await owner.save();
    res.json({
      success: true,
      message: "successfully saved",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get owners
exports.getOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json({
      success: true,
      owners,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
