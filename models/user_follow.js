const db = require("../config/database"),
	Users = require("./user"),
	Sequelize = require("sequelize");

const UserFollow = db.define("questionbox_userfollows", {
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
},{
  timestamps: false,
});

Users.hasOne(UserFollow, {
	foreignKey: 'follower_id',
	onDelete: 'CASCADE'
});

Users.hasOne(UserFollow, {
	foreignKey: 'follows_id',
	onDelete: 'CASCADE'
});

module.exports = UserFollow;
