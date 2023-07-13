const { Router } = require("express");
const ProductModel = require("../models/product");
const uploadProduct = require("../middlewares/photoUpload");

const ProductController = Router();

ProductController.get("/", async (req, res) => {
  try {
    const data = await ProductModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

ProductController.post(
  "/",
  uploadProduct.array("images", 5),
  async (req, res) => {
    try {
      const uploadData = req.files;
      const { name, description, old_price, new_price, details } = req.body;
      console.log(req.body);
      //   save to database
      const photos = uploadData?.map((item) => item.filename);
      const seller_id = res?.locals?.seller_id ?? `64acaa76716da28f21927499`;
      const newProduct = new ProductModel({
        name,
        description,
        old_price,
        new_price,
        details,
        photos,
        seller_id,
      });
      const data = await newProduct.save();
      res.status(201).send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);

ProductController.delete("/:product_id", async (req, res) => {
  try {
    const _id = req.params.product_id;
    const data = await ProductModel.deleteOne({ _id });
    res.status(204).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = ProductController;
