$(document).ready(function () {
  let userId;
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    userId = data.id;
    console.log(userId);
  });

  $('#userInfoBtn').on('click', function (event) {
    console.log(userId);
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let gender = 'male';
    let weight = $('#weight').val();
    let height = $('#height').val();
    let age = $('#age').val();
    let bfp = $('#bfp').val();
    $.ajax('/api/user_data/' + userId, {
      type: 'PUT',
      data: {
        'first_name': firstName,
        'last_name': lastName,
        'gender': gender,
        'weight': weight,
        'height': height,
        'age': age
      }
    }).then(() => {
      console.log(`user ${userId} updated`);
      window.location.href = '/goals';
    });
  });
});
