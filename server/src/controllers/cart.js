const { Router } = require("express");
const CartModel = require("../models/cart");
const ProductModel = require("../models/product");
const DeliveryModel = require("../models/delivery");

const CartController = Router();

CartController.get("/:user_id", async (req, res) => {
  try {
    const user_id = req.params?.user_id;
    const data = await CartModel.find({ user_id });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

CartController.post("/", async (req, res) => {
  try {
    const { cartItems, address } = req.body;
    console.log(req.body);
    //   save to database
    const user_id = res?.locals?.user._id ?? `64acaa76716da28f21927499`;
    const newCart = new CartModel({
      cartItems,
      address,
      user_id,
    });

    const deliveryItems = await Promise.all(
      newCart.cartItems?.map(async (product) => {
        try {
          const quantity = product.quantity;
          const productData = await ProductModel.findById(product?.product_id);
          console.log("Product Data:", productData);
          const price = productData.new_price;
          const seller_id = productData.seller_id;
          const product_name = productData.name;

          const newDelivery = new DeliveryModel();
          newDelivery.quantity = quantity;
          newDelivery.price = price;
          newDelivery.seller_id = seller_id;
          newDelivery.user_id = user_id;
          newDelivery.address = address;
          newDelivery.product_id = product?.product_id;
          newDelivery.product_name = product_name;
          console.log("New Delivery", newDelivery);
          return await newDelivery.save();
        } catch (err) {
          res.status(500).send(err);
        }
      })
    );
    console.log(deliveryItems);
    const data = await newCart.save();
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

CartController.delete("/:cart_id", async (req, res) => {
  try {
    const _id = req.params.cart_id;
    const data = await CartModel.deleteOne({ _id });
    res.status(204).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = CartController;
