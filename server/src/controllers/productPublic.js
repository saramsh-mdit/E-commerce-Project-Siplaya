const { Router } = require("express");
const ProductModel = require("../models/product");
const uploadProduct = require("../middlewares/photoUpload");
const AuthMiddleware = require("../middlewares/authMiddleware");

const ProductPublicController = Router();

ProductPublicController.get("/", async (req, res) => {
  try {
    const data = await ProductModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

ProductPublicController.get("/:seller_id", async (req, res) => {
  try {
    const seller_id = req.params.seller_id;
    const data = await ProductModel.find({ seller_id });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = ProductPublicController;
