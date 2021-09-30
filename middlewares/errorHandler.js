function errorHandler(err, req, res, next) {
  let error = [];
  let statusCode = 500;
  console.error(err);
  switch (err.name) {
    case "UNAUTHORIZED":
      statusCode = 401;
      error.push(err.message);
      break;

    default:
      if (!err.message) error.push("Internal Server Error");
      else error.push(err.message);
      break;
  }

  res.status(statusCode).json({
    responseCode: statusCode,
    responseMessage: error,
  });
}

module.exports = errorHandler;
