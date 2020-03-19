const db = require("../config/database"),
	Users = require("./user"),
	Topic = require("./topic"),
	{ DataTypes } = require("sequelize");

const TopicFollow = db.define("questionbox_topicfollows", {
	id:{
		type: DataTypes.INTEGER,
		primaryKey: true
	},
},{
  timestamps: false,
});

Users.hasOne(TopicFollow, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE'
});

Topic.hasOne(TopicFollow, {
	foreignKey: 'topic_id',
	onDelete: 'CASCADE'
});

module.exports = TopicFollow;
