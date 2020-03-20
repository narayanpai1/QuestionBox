const express = require("express"),
    app = express();

const bodyParser = require("body-parser");

const authentication_routes = require("./routes/auth");

const db = require("./config/database");

db.authenticate()
    .then(() => console.log("Database connected!"))
    .catch(err => console.log("Error: " + err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", authentication_routes);

module.exports = app;
