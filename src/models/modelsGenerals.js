/* const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../database/database");

const Users = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  bio: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Articles = sequelize.define("article", {
  slug: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(50),
  },
  body: Sequelize.STRING,
});
const Categories = sequelize.define("categories", {
  slug: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(50),
  },
});
const Comments = sequelize.define("comment", {
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Tags = sequelize.define("comment", {
  name: {
    type: Sequelize.STRING(50),
    primaryKey: true,
  },
});
Comments.belongsTo(Articles);
Articles.hasMany(Comments);
Comments.belongsTo(Users, { as: "author" });
Articles.belongsTo(Users, { as: "author" });
Articles.belongsToMany(Tags, { through: "article_tags" });
Tags.belongsToMany(Articles, { through: "article_tags" });

Articles.belongsTo(Categories, { as: "category" });

Articles.belongsToMany(Users, { through: "favourites" });
Users.belongsToMany(Articles, { through: "favourites" });

module.exports = {
  sequelize,
  Users,
  Articles,
  Categories,
  Comments,
  Tags,
};
 */
