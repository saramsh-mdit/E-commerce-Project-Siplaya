const { Router } = require("express");
const ProductModel = require("../models/product");
const uploadProduct = require("../middlewares/photoUpload");
const { addProduct, updateProduct } = require("./product.service");

const ProductController = Router();

ProductController.get("/seller/all", async (req, res) => {
  try {
    const seller_id = res?.locals?.user._id;
    console.log("SELLER ID", seller_id);
    const data = await ProductModel.find({ seller_id });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

ProductController.post(
  "/",
  [uploadProduct.array("images", 5)],
  async (req, res) => {
    try {
      const uploadData = req.files;
      console.log(req.files);
      const { name, description, old_price, new_price, details } = req.body;
      const photos = uploadData?.map((item) => item.filename);
      const seller_id = res?.locals?.user._id ?? `64acaa76716da28f21927499`;
      const productData = {
        name,
        description,
        old_price,
        new_price,
        details,
        photos,
        seller_id,
      };
      const results = await addProduct(productData);
      res.status(201).send(results);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);

ProductController.put(
  "/",
  [uploadProduct.array("images", 5)],
  async (req, res) => {
    try {
      const uploadData = req.files;
      const { name, description, old_price, new_price, details } = req.body;
      const photos = uploadData?.map((item) => item.filename);
      const seller_id = res?.locals?.user._id ?? `64acaa76716da28f21927499`;
      const productData = {
        name,
        description,
        old_price,
        new_price,
        details,
        photos,
        seller_id,
      };
      const results = await updateProduct(productData);
      res.status(201).send(results);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);

ProductController.delete("/:product_id", async (req, res) => {
  try {
    const _id = req.params.product_id;
    const seller_id = res.locals?.user?._id;
    const data = await ProductModel.deleteOne({ _id, seller_id });
    res.status(204).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = ProductController;
