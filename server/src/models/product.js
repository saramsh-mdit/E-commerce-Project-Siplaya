const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  old_price: { type: Number, require: true },
  new_price: { type: Number, require: true },
  details: [{ type: String, require: true }],
  photos: [{ type: String }],
  seller_id: { type: mongoose.Schema.ObjectId, required: true },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
