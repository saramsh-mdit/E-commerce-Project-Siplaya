const { Router } = require("express");

const SellerModel = require("../models/seller");
const UserModel = require("../models/user");

const { verifyHash } = require("../utils/hash");
const { createToken } = require("../utils/token");
const AuthMiddleware = require("../middlewares/authMiddleware");

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

AuthController.post("/register/user", async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    const newUser = new UserModel({
      name,
      email,
      password,
      contact,
    });
    const data = await newUser.save();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

AuthController.post("/login/seller", async (req, res) => {
  try {
    const { email, password } = req.body;
    const Seller = await SellerModel.findOne({ email });
    if (!Seller) {
      throw {
        message: "Invalid email or password. May be Seller is not register.",
      };
    } else {
      const isValid = verifyHash(Seller.password, password);
      if (isValid) {
        const token = createToken({ _id: Seller._id, isSeller: true });
        res.send({ token, isSeller: true });
      } else {
        throw { message: "Invalid email or password" };
      }
    }
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
});

AuthController.post("/login/user", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw { message: "Invalid email or password. User Does not exist." };
    } else {
      const isValid = verifyHash(user.password, password);
      if (isValid) {
        const token = createToken({ _id: user._id, isSeller: false });
        res.send({ token, isSeller: false });
      } else {
        throw { message: "Invalid email or password" };
      }
    }
  } catch (err) {
    console.log(err);
    res.status(401).send(err);
  }
});

AuthController.get("/me", AuthMiddleware, async (req, res) => {
  try {
    const _id = res.locals.user._id;
    const isSeller = res.locals.user.isSeller ?? false;
    console.log(res.locals, isSeller);
    if (isSeller) {
      const data = await SellerModel.findById(_id, {
        _id: true,
        name: true,
        email: true,
        contact: true,
        address: true,
        shop_name: true,
      });
      res.send({ ...data._doc, isSeller: true });
    } else {
      const data = await UserModel.findById(_id, {
        name: true,
        email: true,
        contact: true,
      });
      res.send({ ...data._doc, isSeller: false });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = AuthController;
