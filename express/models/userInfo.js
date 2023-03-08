const Sequelize = require("sequelize");

module.exports = class UserInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userName: {
          type: Sequelize.STRING(255),
        },
        userId: {
          type: Sequelize.STRING(255),
          unique: true,
        },
        userPw: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "UserInfo",
        tableName: "UserInfo",
        timestamps: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.UserInfo.hasMany(db.Board, {
      as: "UserBoards",
      foreignKey: "userId",
      sourceKey: "userId",
    });

    db.UserInfo.hasMany(db.Comment, {
      foreignKey: "userId",
      sourceKey: "userId",
    });
  }
};
