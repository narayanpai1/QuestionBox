const db = require("../config/database"),
	Answer = require("./answer"),
	Sequelize = require("sequelize");

const AnswerUpvote = db.define("questionbox_answerupvotes", {
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
},{
  timestamps: false,
});

Answer.hasOne(AnswerUpvote, {
	foreignKey: 'answer_id',
	onDelete: 'CASCADE'
});

module.exports = AnswerUpvote;
