const { Router } = require("express");

const AuthController = require("../controllers/auth");
const ProductPublicController = require("../controllers/productPublic");
const PrivateRoutes = require("./privateRoutes");

const Routes = Router();

Routes.use("/auth", AuthController);
Routes.use("/product", ProductPublicController);
Routes.use(PrivateRoutes);

// Routes.get("/", (req, res) => {
//   res.send({ message: "Server is up and running" });
// });

module.exports = Routes;
