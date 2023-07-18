const jwt = require("jsonwebtoken");

const env = require("../constants/env");

const createToken = (obj) => {
  try {
    const token = jwt.sign(obj, env.SECRET);
    return token;
  } catch (err) {
    throw err;
  }
};

const verifyToken = (token) => {
  try {
    console.log(token);
    const tokenData = jwt.verify(token, env.SECRET);
    console.log(tokenData);
    if (!tokenData) throw { message: "Invalid Token" };
    else return tokenData;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = { createToken, verifyToken };
