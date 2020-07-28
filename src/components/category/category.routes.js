const router = require("express").Router();
const catCntrl = require("./category.controller");

router.post("/", catCntrl.createCategory);
router.get("/", catCntrl.getCategories);

module.exports = router;
