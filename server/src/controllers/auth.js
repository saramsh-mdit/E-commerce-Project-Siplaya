const { Router } = require("express");
const SellerModel = require("../models/seller");

const AuthController = Router();

AuthController.post("/register/seller", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      contact,
      address,
      shop_name,
      shop_registration_no,
    } = req.body;
    const newSeller = new SellerModel({
      name,
      email,
      password,
      contact,
      address,
      shop_name,
      shop_registration_no,
    });
    const data = await newSeller.save();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = AuthController;
