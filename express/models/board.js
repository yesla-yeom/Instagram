const Sequelize = require("sequelize");

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userName: {
          type: Sequelize.STRING(255),
        },

        title: {
          type: Sequelize.STRING(255),
        },
        text: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Board",
        tableName: "Board",
        timestamps: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  // board 여러 개 // userInfo 1개
  static associate(db) {
    db.Board.belongsTo(db.UserInfo, {
      foreignKey: "userId",
      targetKey: "userId",
    });
    db.Board.hasMany(db.Comment, {
      foreignKey: "userId",
      targetKey: "userId",
    });
  }
};
