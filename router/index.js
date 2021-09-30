const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");

router.use(authentication);
router.get("/user", userController.showDataUser);
router.post("/user", userController.addDataUser);

module.exports = router;
