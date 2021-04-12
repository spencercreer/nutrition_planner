$(document).ready(function () {
  let userId;
  // Get user data from database
  $.get("/api/user_data").then(function (data) {
    console.log('hello')
    userId = data.id;
  });


  // newMember button on click
  $('#userInfoBtn').on('click', function (event) {
    event.preventDefault();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let gender = 'male';
    let weight = parseInt($('#weight').val());
    let height = parseInt($('#height').val());
    let age = parseInt($('#age').val());
    let bfp = $('#bfp').val();
    // Update user data in database, then redirect to goals page
    $.ajax('/api/user_data/' + userId, {
      type: 'PUT',
      data: {
        'first_name': firstName,
        'last_name': lastName,
        'gender': gender,
        'weight': weight,
        'height': height,
        'age': age,
      }
    }).then(() => {
      window.location.replace('/goals');
    });
  });


});
