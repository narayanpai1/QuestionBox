const Sequelize = require("sequelize");

module.exports = new Sequelize("questionboxdb", "narayanpai1", "narayan123", {
  host: "85.10.205.173",
  port: "3306",
  dialect: "mysql"
});
