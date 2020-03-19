const Sequelize = require("sequelize"),
    db = require("../config/database");

const Users = db.define("questionbox_appuser", {
    user_name: {
        type: Sequelize.STRING
    },
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true
    },
    user_password: Sequelize.STRING,
    bio: Sequelize.STRING
},{
    timestamps: false,
});

module.exports = Users;
