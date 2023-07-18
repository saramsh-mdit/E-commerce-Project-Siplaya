const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env?.PORT ?? 3500,
  DB_CONNECTION:
    process.env.DB_CONNECTION ?? `mongodb://127.0.0.1:27017/e_commerce`,
  SECRET: process.env.SECRET ?? "password",
};
