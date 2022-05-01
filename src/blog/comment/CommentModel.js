const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");
sequelize;
class Comment extends Model {}

Comment.init(
  {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "comment",
  }
);

module.exports = Comment;
