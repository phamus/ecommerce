const express = require("express");
const prodCntrl = require("./product.controller");
const upload = require("../../library/middleware/upload-photo");

const router = express.Router();

//create product
router.post("/product", upload.single("photo"), prodCntrl.createProduct);

//get all products
router.get("/", prodCntrl.getAllProducts);

//get single product
router.get("/:id", prodCntrl.getProduct);

router.put("/:id", prodCntrl.updateProduct);
router.delete("/:id", prodCntrl.deleteProduct);

module.exports = router;
