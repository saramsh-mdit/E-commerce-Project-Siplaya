const mongoose = require("mongoose");

const { getHash } = require("../utils/hash");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  contact: { type: String, require: true },
});

userSchema.pre("save", function (done) {
  this.password = getHash(this.password);
  done();
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
