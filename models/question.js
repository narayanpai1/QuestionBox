const db = require("../config/database"),
	Sequelize = require("sequelize"),
	Users = require("./user"),
	Topic = require("./topic");
	
const Question = db.define("questionbox_questions", {
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	question:{
		type:Sequelize.TEXT
	},
	views: {
		type: Sequelize.INTEGER,
		defaultValue : 0
	},
	upvotes: {
		type: Sequelize.INTEGER,
		defaultValue : 0

	}
},{
  timestamps: false,
});

Users.hasOne(Question, {
	foreignKey: 'asked_by_id',
	onDelete: 'CASCADE'
});


Topic.hasOne(Question, {
	foreignKey: 'topic_id',
	onDelete: 'CASCADE'
});

module.exports = Question;
