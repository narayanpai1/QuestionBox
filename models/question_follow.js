const db = require("../config/database"),
	Users = require("./user"),
	Question = require("./question"),
	{ DataTypes } = require("sequelize");

const QuestionFollow = db.define("questionbox_questionfollows", {
	id:{
		type: DataTypes.INTEGER,
		primaryKey: true
	},
},{
  timestamps: false,
});

Users.hasOne(QuestionFollow, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE'
});

Question.hasOne(QuestionFollow, {
	foreignKey: 'question_id',
	onDelete: 'CASCADE'
});

module.exports = QuestionFollow;
