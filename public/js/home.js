
$(document).ready(function () {
  
    // Get user data from database
    $.get('/api/user_data').then(function (data) {
        // Set variables from get database
        let userId = data.id;
        let email = data.email;
        let firstName = data.firstName;
        let lastName = data.lastName;
        let gender = 'male';
        let weight = data.weight;
        let height = data.height;
        let age = data.age;
        let goal = data.goal; //string
        let goalWeight = data.goal_weight;
        let goalBfp = data.goal_bfp;
        // Declare variables
        let bmr;
        let tdee;
        let calDeficit;
        let targetCal;

        $('#goals-intro').text(`Hello ${firstName}!`);

        // BMR = 370 + 21.6 x LBM(kg)
        if (gender === 'male') {
            // (men) BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) + 5
            bmr = 10 * 0.45359 * weight + 6.25 * height * 2.54 - 5 * age + 5;
        } else {
            // (women) BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) - 161
            bmr = 10 * 0.45359 * weight + 6.25 * height * 2.54 - 5 * age - 161;
        }
        tdee = 1.5 * bmr;
        calDeficit = 20;
        targetCal = tdee * (1 - calDeficit / 100);
        console.log(bmr);
        $('#bmr').text(`BMR: ${Math.round(bmr)}`);
        $('#tdee').text(`TDEE: ${Math.round(tdee)}`);
        $('#cal-deficit').text(`Calorie Deficit: ${calDeficit}`);
        $('#target-cal').text(`Target Calories: ${Math.round(targetCal)}`);
    });
});