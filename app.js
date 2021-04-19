require("dotenv/config");

// ℹ️ Connects to the database
require("./db");
const express = require("express");
const hbs = require("hbs");
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// default value for title local
const projectName = "lab-mongoose-movies";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with IronGenerator`;

// 👇 Start handling routes here
const index = require("./routes/index");
const celebrity = require("./routes/celebrity");
app.use("/", index);
app.use("/celebrity", celebrity);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
