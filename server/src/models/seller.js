const mongoose = require("mongoose");

const { getHash } = require("../utils/hash");

const sellerSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  contact: { type: String, require: true },
  address: { type: String, require: true },
  shop_name: { type: String, require: true },
  shop_registration_no: { type: String, require: true },
});

sellerSchema.pre("save", function (done) {
  this.password = getHash(this.password);
  done();
});

const SellerModel = mongoose.model("seller", sellerSchema);

module.exports = SellerModel;
