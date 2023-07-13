const { Router } = require("express");

const SellerController = require("../controllers/seller");
const AuthController = require("../controllers/auth");
const ProductController = require("../controllers/product");
const CartController = require("../controllers/cart");
const UserController = require("../controllers/user");

const Routes = Router();

Routes.use("/auth", AuthController);
Routes.use("/seller", SellerController);
Routes.use("/user", UserController);
Routes.use("/product", ProductController);
Routes.use("/cart", CartController);

Routes.get("/", (req, res) => {
  res.send({ message: "Server is up and running" });
});

module.exports = Routes;
