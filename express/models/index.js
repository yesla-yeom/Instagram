"use strict";

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
