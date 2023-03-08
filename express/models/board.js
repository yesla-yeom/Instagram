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
        photo1: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo2: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo3: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo4: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo5: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo6: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo7: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo8: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo9: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        photo10: {
          type: Sequelize.STRING(255),
          allowNull: true,
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

  static associate(db) {
    db.Board.belongsTo(db.UserInfo, {
      foreignKey: "userId",
      targetKey: "userId",
    });
    db.Board.hasMany(db.Comment, {
      foreignKey: "boardId",
      targetKey: "id",
    });
  }
};
