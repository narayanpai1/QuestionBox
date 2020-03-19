const db = require("../config/database"),
	Sequelize = require("sequelize"),
	Users = require("./user"),
	Question = require("./question");

const Answer = db.define("questionbox_answers", {
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	answer:{
		type:Sequelize.TEXT
	},
	views: {
		type: Sequelize.INTEGER,
	},
	answered_on: {
		type: Sequelize.DATE
	}
},{
  timestamps: false,
});

Question.hasOne(Answer, {
	foreignKey: 'question_id',
	onDelete: 'CASCADE'
});

Users.hasOne(Answer, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE'
});

module.exports = Answer;
