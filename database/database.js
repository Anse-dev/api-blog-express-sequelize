const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "nodes",
  username: "root",
  password: "",
  dialect: "mysql",
});

module.exports = sequelize;
