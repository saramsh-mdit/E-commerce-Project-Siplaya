const bcrypt = require("bcrypt");

const getHash = (value) => {
  try {
    const result = bcrypt.hashSync(value, 10);
    return result;
  } catch (err) {
    throw err;
  }
};

const verifyHash = (hash, value) => {
  try {
    const result = bcrypt.compareSync(value, hash);
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = { getHash, verifyHash };
