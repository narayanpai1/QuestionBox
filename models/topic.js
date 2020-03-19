const Sequelize = require("sequelize");
const db = require("../config/database");

const Topic = db.define("questionbox_topic", {
  name: {
    type: Sequelize.STRING
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
},{
  timestamps: false,
});

module.exports = Topic;
