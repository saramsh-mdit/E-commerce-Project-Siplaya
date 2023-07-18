const { Router } = require("express");
const DeliveryModel = require("../models/delivery");
const UserModel = require("../models/user");
const ProductModel = require("../models/product");

const DeliveryController = Router();

DeliveryController.get("/", async (req, res) => {
  try {
    const seller_id = res?.locals?.user?._id;
    const deliveryData = await DeliveryModel.find({ seller_id });

    const finalData = await Promise.all(
      deliveryData?.map(async (item) => {
        const user = await UserModel.findById(item.user_id, {
          name: true,
          contact: true,
        });
        const product = await ProductModel.findById(item.product_id);

        return {
          user,
          product,
          price: item.price,
          quantity: item.quantity,
          _id: item._id,
        };
      })
    );
    res.send(finalData);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = DeliveryController;
