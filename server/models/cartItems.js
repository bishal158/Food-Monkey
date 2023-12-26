const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);
const CartItemModel = mongoose.model("CartItem", CartItemSchema);

module.exports = CartItemModel;
