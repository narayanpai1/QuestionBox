const express = require("express");
const app = express();

const main_page_routes = require("./routes/main_page");
const bodyParser = require("body-parser");

const db = require("./config/database");

db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch(err => console.log("Error: " + err));

// app.use(bodyParser);

app.use("/", main_page_routes);
module.exports = app;
