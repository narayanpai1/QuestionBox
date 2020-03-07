const Sequelize = require("sequelize");

module.exports = new Sequelize("questionboxdb", "root", "narayan123", {
  host: "localhost",
  port: "3306",
  dialect: "mysql"
});
