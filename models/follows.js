const db = require("../config/database"),
	Users = require("./user");

const UserFollows = db.define("questionbox_userfollows", {
},{
  timestamps: false,
});

Users.hasOne(UserFollows, {
	foreignKey: 'follower_id',
	onDelete: 'CASCADE'
});

Users.hasOne(UserFollows, {
	foreignKey: 'follows_id',
	onDelete: 'CASCADE'
});

module.exports = UserFollows;
