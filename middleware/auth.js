const jwt = require("jsonwebtoken");
const config = require("../config/default.json");

module.exports = function (req, res, next) {
  //retreive this header value from the request
  const token = req.header("auth-token");

  //check if token is valid or not
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token found ! Request not authorized" });
  }

  try {
    const decode = jwt.verify(token, config.jwtsecret);
    //adding userid into the req body for further access through req.
    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid Token! Request not authorized" });
  }
};
