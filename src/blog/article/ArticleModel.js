const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../../../database/database");

class Article extends Model {}

Article.init(
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
    body: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "article",
  }
);

module.exports = Article;
