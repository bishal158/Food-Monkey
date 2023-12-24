const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
      required: true,
    },
    product_price: {
      type: String,
      required: true,
    },
    product_category: {
      type: String,
      required: true,
    },
    product_type: {
      type: String,
      required: true,
    },
    product_image_1: {
      type: String,
      required: true,
    },
    // product_image_2:{
    //     type: String,
    //     required: true
    // }
  },
  {
    timestamps: true,
  },
);
const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
