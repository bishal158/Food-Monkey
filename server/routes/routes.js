const express = require("express");

const router = express.Router();
const {
  signup,
  login,
  user,
  logout,
  addProduct,
  getProduct,
  getProductDetails,
} = require("../controllers/controllers");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const filesystem = require("fs");

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", user);
router.post("/logout", logout);
router.post("/addProduct", upload.single("product_image_1"), addProduct);
router.get("/getProduct", getProduct);
router.get("/getProductDetails/:id", getProductDetails);
module.exports = router;
