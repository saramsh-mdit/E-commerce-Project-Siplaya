const { Router } = require("express");
const CartModel = require("../models/cart");

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
    const user_id = res?.locals?.user_id ?? `64acaa76716da28f21927499`;
    const newCart = new CartModel({
      cartItems,
      address,
      user_id,
    });
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
    const data = await CartModel.deleteOne({_id});
    res.status(204).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = CartController;
