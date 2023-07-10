const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const Routes = require("./routes");

const app = express();

// Middlewares
app.use(express.static("/public"));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Routes);

app.get("*", (req, res) => {
  res.status(404).send({ message: "404 Page/API not found" });
});

module.exports = app;
