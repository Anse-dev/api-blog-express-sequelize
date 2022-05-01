const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");

class Category extends Model {}

Category.init(
  {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(50),
    },
  },
  {
    sequelize,
    modelName: "categories",
  }
);

module.exports = Category;
