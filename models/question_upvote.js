const db = require("../config/database"),
	Users = require("./user"),
	Questions = require("./question"),
	{ DataTypes } = require("sequelize");

const QuestionUpvote = db.define("questionbox_questionupvote", {
	id:{
		type: DataTypes.INTEGER,
		primaryKey: true
	},
},{
  timestamps: false,
});

Users.hasOne(QuestionUpvote, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE'
});

Questions.hasOne(QuestionUpvote, {
	foreignKey: 'question_id',
	onDelete: 'CASCADE'
});

module.exports = QuestionUpvote;
