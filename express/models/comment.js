const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userName: {
          type: Sequelize.STRING(255),
        },
        text: {
          type: Sequelize.STRING(255),
        },
      },
      {
        sequelize,
        modelName: "Comment",
        tableName: "Comment",
        timestamps: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.UserInfo, {
      foreignKey: "userId",
      sourceKey: "userId",
    });

    db.Comment.belongsTo(db.Board, {
      foreignKey: "userId",
      sourceKey: "userId",
    });
  }
};
