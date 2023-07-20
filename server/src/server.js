const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const Routes = require("./routes");
const AuthMiddleware = require("./middlewares/authMiddleware");

const app = express();

app.use(cors());
// Middlewares
app.use(express.static(process.cwd() + "/public"));
app.use(express.static(process.cwd() + "/dist"));
app.use(express.static(process.cwd() + "/dist/assets"));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Routes);

// app.get("*", (req, res) => {
//   res.sendFile(process.cwd() + "/dist/index.html");
// });

module.exports = app;
