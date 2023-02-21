"use strict";

// const fs = require("fs");
// const path = require("path");
// const basename = path.basename(__filename);
// const process = require("process");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const UserInfo = require("./userInfo");
const Comment = require("./comment");
const Board = require("./board");

const db = { UserInfo, Comment, Board };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

UserInfo.init(sequelize);
Comment.init(sequelize);
Board.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
