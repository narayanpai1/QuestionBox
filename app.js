const express = require("express"),
    app = express();

const bodyParser = require("body-parser");

const main_page_route = require("./routes/main_page"),
    db = require("./config/database");

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch(err => console.log("Error: " + err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", main_page_route);

module.exports = app;
