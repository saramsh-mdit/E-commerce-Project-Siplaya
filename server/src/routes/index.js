const { Router } = require("express");

const Routes = Router();

Routes.get("/", (req, res) => {
  res.send({ message: "Server is up and running" });
});

module.exports = Routes;
