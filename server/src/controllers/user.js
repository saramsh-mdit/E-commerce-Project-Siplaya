const { Router } = require("express");
const UserModel = require("../models/user");

const UserController = Router();

UserController.get("/all", async (req, res) => {
  try {
    const data = await UserModel.find(
      {},
      {
        _id: true,
        name: true,
        email: true,
        contact: true,
      }
    );
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

UserController.get("/:user_id", async (req, res) => {
  try {
    const _id = req.params.user_id;
    const data = await UserModel.findOne(
      { _id },
      {
        _id: true,
        name: true,
        email: true,
        contact: true,
      }
    );
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

UserController.post("/", async (req, res) => {
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

module.exports = UserController;
