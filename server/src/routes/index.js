const { Router } = require("express");

const SellerController = require("../controllers/seller");
const AuthController = require("../controllers/auth");

const Routes = Router();

Routes.use("/auth", AuthController);
Routes.use("/seller", SellerController);

Routes.get("/", (req, res) => {
  res.send({ message: "Server is up and running" });
});

module.exports = Routes;
