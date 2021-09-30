const express = require("express");
const defaultRouter = require("./router");
const app = express();
const port = 3000;
const errorHandler = require("./middlewares/errorHandler");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", defaultRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log("listening on port" + port);
});
