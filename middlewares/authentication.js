async function authentication(req, res, next) {
  const { userid, scope } = req.headers;

  try {
    if (userid === "ifabula" && scope === "user") {
      next();
    } else {
      res.status(401).json({
        responseCode: 401,
        responseMessage: "UNAUTHORIZED",
      });
    }
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Internal Server Error";
    res.status(500).json({
      responseCode: status,
      responseMessage: message,
    });
  }
}
module.exports = authentication;
