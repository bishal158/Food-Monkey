const express = require("express");
const router = express.Router();
const {signup,login, user ,logout} = require("../controllers/user-controllers")


router.post("/signup", signup);
router.post("/login", login);
router.get("/user", user);
router.post("/logout", logout);

module.exports = router;