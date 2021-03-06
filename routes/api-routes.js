// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the newMember page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      activity: req.body.activity,
      goal: req.body.goal,
      goal_weight: req.body.goal_weight,
      goal_bfp: req.body.goal_bfp
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      activity: req.body.activity,
      goal: req.body.goal,
      goal_weight: req.body.goal_weight,
      goal_bfp: req.body.goal_bfp
    })
      .then(function () {
        res.redirect(307, "/api/login")
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {

    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        gender: req.user.gender,
        weight: req.user.weight,
        height: req.user.height,
        age: req.user.age,
        activity: req.user.activity,
        goal: req.user.goal,
        goal_weight: req.user.goal_weight,
        goal_bfp: req.user.goal_bfp
      });
    }
  });

  app.put("/api/user_data/:id", (req, res) => {
    db.User.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      goal: req.body.goal,
      goal_weight: req.body.goal_weight,
      goal_bfp: req.body.goal_bfp
    },
      {
        where:
        {
          id: req.params.id
        }
      }).then((updateUser) => res.json(updateUser))
  });

  // Route for getting food data
  app.get("/api/food_data", function (req, res) {
    db.Food.findAll().then((dbFood) => res.json(dbFood));
  });
  // Route for getting recipe data
  app.get("/api/recipe_data", function (req, res) {
    db.Recipe.findAll().then((dbRecipe) => res.json(dbRecipe));
  });

  app.post('/api/meal_plan', (req, res) => {
    db.MealPlan.create({
      name: req.body.mealPlanName,
      user_id: req.body.user_id
    })
    .then((dbMealPlan) => {
      res.json(dbMealPlan)
    })
  });
};

