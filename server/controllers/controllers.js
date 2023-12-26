const User = require("../models/user");
const CartItem = require("../models/cartItems");
const Product = require("../models/product");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "food-monkey";
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const filesystem = require("fs");
// user signup
const signup = async (req, res, next) => {
  const { full_name, phone, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    full_name,
    phone,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ message: user });
};

// user login

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let existingUser;
    try {
      existingUser = await User.findOne({ email: email });
    } catch (err) {
      return new Error(err);
    }
    if (!existingUser) {
      return res.status(400).json({ message: "User not found. Signup Please" });
    }
    const isPasswordCorrect = bcrypt.compareSync(
      password,
      existingUser.password,
    );
    if (isPasswordCorrect) {
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        JWT_SECRET_KEY,
        {},
      );
      console.log(token);
      res.status(200).cookie("token", token).json({
        id: existingUser._id,
        email: existingUser.email,
        full_name: existingUser.full_name,
        phone: existingUser.phone,
      });
    } else {
      res.status(400).json({ message: "Invalid Email / Password" });
    }
  } catch (err) {
    console.log(err);
  }
};

const user = async (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, JWT_SECRET_KEY, {}, (error, info) => {
    if (error) throw error;
    res.json(info);
  });
  // console.log(token);
  // return res.json(token);
};

const logout = async (req, res, next) => {
  res.cookie("token", "").json("ok");
};

const addProduct = async (req, res, next) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const extension = parts[parts.length - 1];
  const newPath = path + "." + extension;
  filesystem.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, JWT_SECRET_KEY, {}, async (error, info) => {
    if (error) throw error;
    const {
      product_name,
      product_description,
      product_price,
      product_category,
      product_type,
    } = req.body;
    const product = await Product.create({
      product_name,
      product_description,
      product_price,
      product_category,
      product_type,
      product_image_1: newPath,
    });
    res.json(product);
  });
};

const getProduct = async (req, res, next) => {
  res.json(await Product.find());
};
const getProductDetails = async (req, res, next) => {
  const { id } = req.params;
  const productDetails = await Product.findById(id);
  res.json(productDetails);
};

const addCartItem = async (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, JWT_SECRET_KEY, {}, async (error, info) => {
    if (error) throw error;
    const { amount, foodItemId } = req.body;
    console.log(foodItemId);
    const cartItem = await CartItem.create({
      user: info.id,
      product: foodItemId,
      quantity: amount,
    });
    res.json(cartItem);
  });
};

const getCartItem = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    // if (!isValidUserId(userId)) {
    //   return res.status(401).json({ message: 'Invalid user ID' });
    // }
    jwt.verify(token, JWT_SECRET_KEY, {}, async (error, info) => {
      if (error) throw error;
      const cartItems = await CartItem.find({ user: info.id })
        .populate("user")
        .populate("product");
      res.json(cartItems);
      console.log(cartItems);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cart items" });
  }
};

exports.signup = signup;
exports.login = login;
exports.user = user;
exports.logout = logout;
exports.addProduct = addProduct;
exports.getProduct = getProduct;
exports.getProductDetails = getProductDetails;
exports.addCartItem = addCartItem;
exports.getCartItem = getCartItem;
