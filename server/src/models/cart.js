const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  cartItems: [
    {
      price: { type: Number, require: true },
      quantity: { type: Number, required: true },
      product_id: { type: mongoose.Schema.ObjectId, required: true },
    },
  ],
  address: { type: String, required: true },
  user_id: { type: mongoose.Schema.ObjectId, required: true },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
