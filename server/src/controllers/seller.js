const { Router } = require("express");
const SellerModel = require("../models/seller");

const SellerController = Router();


SellerController.get("/all", async (req, res) => {
  try {
    const data = await SellerModel.find(
      {},
      {
        _id: true,
        name: true,
        email: true,
        contact: true,
        address: true,
        shop_name: true,
      }
    );
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

SellerController.post("/", async (req, res) => {
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

module.exports = SellerController;
