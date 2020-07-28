const router = require("express").Router();
const ownerCntrl = require("./owner.controller");
const upload = require("../../library/middleware/upload-photo");

router.post("/", upload.single("photo"), ownerCntrl.createOwner);

router.get("/", ownerCntrl.getOwners);

module.exports = router;
