const { Router } = require("express");

const SellerController = require("../controllers/seller");
const ProductController = require("../controllers/product");
const CartController = require("../controllers/cart");
const UserController = require("../controllers/user");
const AuthMiddleware = require("../middlewares/authMiddleware");
const DeliveryController = require("../controllers/delivery");

const PrivateRoutes = Router();

PrivateRoutes.use(AuthMiddleware);
PrivateRoutes.use("/seller", SellerController);
PrivateRoutes.use("/user", UserController);
PrivateRoutes.use("/cart", CartController);
PrivateRoutes.use("/product", ProductController);
PrivateRoutes.use("/delivery", DeliveryController);

// PrivateRoutes.get("/", (req, res) => {
//   res.send({ message: "Server is up and running" });
// });

module.exports = PrivateRoutes;
