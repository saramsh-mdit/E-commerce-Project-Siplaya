const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema({
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  product_name: { type: String, required: true },
  address: { type: String, required: true },
  seller_id: { type: mongoose.Schema.ObjectId, required: true },
  user_id: { type: mongoose.Schema.ObjectId, required: true },
  product_id: { type: mongoose.Schema.ObjectId, required: true },
});

const DeliveryModel = mongoose.model("delivery", DeliverySchema);

module.exports = DeliveryModel;
