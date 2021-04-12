$(document).ready(function () {
    let userId;
    // Get user data from database
    $.get('/api/user_data').then(function (data) {
        console.log('goals page')
        userId = data.id;
        $('#goals-intro').text(`Hello ${data.firstName}!`);
    });

    // submitGoal button on click
    $('#goal-btn').on('click', function (event) {
        event.preventDefault();
        let goal = $('#goal').val();
        let goalWeight = $('#goal-weight').val();
        let goalBfp = $('#goal-bfp').val();
        // Update user data in database, then redirect to goals page
        $.ajax('/api/user_data/' + userId, {
            type: 'PUT',
            data: {
                'goal': goal,
                'goal_weight': goalWeight,
                'goal_bfp': goalBfp
            }
        }).then(() => {
            window.location.href = '/home';
        });
    });
});