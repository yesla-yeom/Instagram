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
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.UserInfo.hasMany(db.Board, {
      as: "UserBoards",
      // as: 변수명 / 사용법 => addUserBoards (belongsTo는 X)
      foreignKey: "userId",
      // board table db에 새로 생성되는 컬럼명 (신기)
      sourceKey: "userId",
    });

    db.UserInfo.hasMany(db.Comment, {
      as: "UserComments",
      foreignKey: "userId",
      sourceKey: "userId",
    });
  }
};
