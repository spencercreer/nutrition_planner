$(document).ready(function () {
  // Getting references to our form and input
  let signUpForm = $("form.signup");
  let emailInput = $("input#email-input");
  let passwordInput = $("input#password-input");
  let signUpPage = $("#signup-page");
  let infoPage = $("#info-page");
  let goalsPage = $("#goals-page")
  let infoBtn = $("#info-button");
  let goalBtn = $("#goal-button")
  var userData = {};

  signUpForm.on("submit", function (event) {
    event.preventDefault();
    userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    }

    if (!userData.email || !userData.password) {
      return;
    }
    emailInput.val("");
    passwordInput.val("");
    // Hide signup page and show user info page
    signUpPage.hide();
    infoPage.show();
  })

  // Info button on click
  infoBtn.on("click", function (event) {
    event.preventDefault();
    userData.firstName = $('#first-name').val();
    userData.lastName = $('#last-name').val();
    userData.gender = 'male';
    userData.weight = parseInt($('#weight').val());
    userData.height = parseInt($('#height').val());
    userData.age = parseInt($('#age').val());
    userData.activity = $('#activity').val();
    userData.bfp = $('#bfp').val();

    $("#goals-intro").text(`Hello ${userData.firstName}!`)

    infoPage.hide();
    goalsPage.show();
  });

  // submitGoal button on click
  goalBtn.on('click', function (event) {
    event.preventDefault();
    userData.goal = $('#goal').val();
    userData.goalWeight = $('#goal-weight').val();
    userData.goalBfp = $('#goal-bfp').val();
    signUpUser(userData);
  });

  // Does a post to the signup route. If successful, we are redirected to the newMember page
  // Otherwise we log any errors
  function signUpUser(userData) {
    console.log(userData)
    $.post("/api/signup", {
      email: userData.email,
      password: userData.password,
      first_name: userData.firstName,
      last_name: userData.lastName,
      gender: userData.gender,
      weight: userData.weight,
      height: userData.height,
      age: userData.age,
      activity: userData.activity,
      goal: userData.goal,
      goal_weight: userData.goalWeight,
      goal_bfp: userData.goalBfp
    })
      .then(function (data) {
        window.location.replace("/home");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
