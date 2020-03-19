const db = require("../config/database"),
	Sequelize = require("sequelize"),
	Users = require("./user"),
	Topic = require("./topic");
	
const Question = db.define("questionbox_answers", {
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	question:{
		type:Sequelize.TEXT
	},
	views: {
		type: Sequelize.INTEGER,
	}
},{
  timestamps: false,
});

Users.hasOne(Question, {
	foreignKey: 'askedby_id',
	onDelete: 'CASCADE'
});

Topic.hasOne(Question, {
	foreignKey: 'topic_id',
	onDelete: 'CASCADE'
});

module.exports = Question;
