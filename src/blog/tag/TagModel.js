const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");

class Tag extends Model {}

Tag.init(
  {
    name: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "tags",
  }
);

module.exports = Tag;
