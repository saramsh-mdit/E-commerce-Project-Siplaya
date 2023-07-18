const { verifyToken } = require("../utils/token");

function AuthMiddleware(req, res, done) {
  try {
    const { authorization } = req.headers;
    const token = authorization?.split(" ")[1] ?? "";
    if (!token) {
      throw { message: "No authentication token" };
    } else {
      const tokenData = verifyToken(token);
      res.locals.user = tokenData;
    }
    done();
  } catch (err) {
    res.status(401).send(err);
  }
}

module.exports = AuthMiddleware;
