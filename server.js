// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const mysql = require('mysql2');

// Requiring passport, and models
const passport = require("./config/passport");
const db = require("./models");

// Setting up port
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use sessions to track of user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Require routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
