const e = require("express");
const Model = require("../model/model");

class userController {
  static async showDataUser(req, res, next) {
    try {
      Model.show((err, data) => {
        if (err) {
          res.status(500).json({
            err,
          });
        } else {
          console.log(data);
          res.status(200).json({
            data,
          });
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async addDataUser(req, res, next) {
    try {
      const { name, group } = req.body;
      Model.add(name, group, (err, data) => {
        if (err) {
          res.status(500).json({
            err,
          });
        } else {
          res.status(201).json({
            messages: "Success Add data User",
          });
        }
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = userController;
