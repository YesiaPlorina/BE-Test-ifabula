const fs = require("fs");

class Model {
  static show(callback) {
    fs.readFile("./user.json", "utf8", (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        data = JSON.parse(data);
        let results = [];
        for (const key in data) {
          const value = data[key];
          results.push(value);
        }
        callback(null, results);
      }
    });
  }

  static add(name, group, callback) {
    Model.show((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        let newData = {
          name: name,
          group: group,
        };
        data.push(newData);
        const newDataUser = JSON.stringify(data, null, 4);

        fs.writeFile("./user.json", newDataUser, (err) => {
          if (err) {
            callback(err);
          } else {
            callback(null, newData);
          }
        });
      }
    });
  }
}

module.exports = Model;
