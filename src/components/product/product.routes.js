const express = require("express");
const prodCntrl = require("./product.controller");
const upload = require("../../library/middleware/upload-photo");

const router = express.Router();

//create product
router.post("/product", upload.single("photo"), prodCntrl.createProduct);

module.exports = router;
