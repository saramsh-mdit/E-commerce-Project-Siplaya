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

ProductPublicController.get("/:product_id", async (req, res) => {
  try {
    const _id = req.params.product_id;
    const data = await ProductModel.findOne({ _id });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = ProductPublicController;
