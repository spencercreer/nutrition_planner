
$(document).ready(function () {
  
    // Get user data from database
    $.get('/api/user_data').then(function (data) {
        console.log(data);
        // Set variables from get database
        let userId = data.id;
        let email = data.email;
        let firstName = data.first_name;
        let lastName = data.last_name;
        let gender = 'male';
        let weight = data.weight;
        let height = data.height;
        let age = data.age;
        let activity = data.activity;
        let goal = data.goal;
        let goalWeight = data.goal_weight;
        let goalBfp = data.goal_bfp;
        // Declare variables
        let bmr;
        let tdee;
        let calDeficit;
        let targetCal;
        let targetCarb;
        let targetPro;
        let targetFat;

        $('#intro').text(`${firstName} ${lastName}'s Nutrient Breakdown`);

        // Calculate BMR based on user values
        // BMR = 370 + 21.6 x LBM(kg)
        if (gender === 'male') {
            // (men) BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) + 5
            bmr = 10 * 0.45359 * weight + 6.25 * height * 2.54 - 5 * age + 5;
        } else {
            // (women) BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) - 161
            bmr = 10 * 0.45359 * weight + 6.25 * height * 2.54 - 5 * age - 161;
        }

        // Calculate TDEE based on user values
        if(activity === "1"){
            tdee = 1.15 * bmr;
        } else if (activity === "2") {
            tdee = 1.3 * bmr;
        } else if (activity === "3") {
            tdee = 1.5 * bmr;  
        } else if (activity === "4") {
            tdee = 1.7 * bmr;
        } else if (activity === "5") {
            tdee =1.9 * bmr;
        }

        // Determine calorie deficit
        if (goal === "1") {
            calDeficit = 20;
            $('#cal-deficit').text(`Calorie Deficit: ${calDeficit}%`);
            $('target-carb').text(`Target Carbs: ${targetCarb} g`);
            $('target-pro').text(`Target Protein: ${targetPro} g`);
            $('target-fat').text(`Target Fat: ${targetFat} g`);
        } else if (goal === "2") {
            calDeficit = 0;
            $('#cal-deficit').text(`Calorie Deficit: ${calDeficit}%`);
            $('target-carb').text(`Target Carbs: ${targetCarb} g`);
            $('target-pro').text(`Target Protein: ${targetPro} g`);
            $('target-fat').text(`Target Fat: ${targetFat} g`);
        } else if (goal === "3") {
            calDeficit = -10;
            $('#cal-deficit').text(`Calorie Surplus: 10%`);
            $('target-carb').text(`Target Carbs: ${targetCarb} g`);
            $('target-pro').text(`Target Protein: ${targetPro} g`);
            $('target-fat').text(`Target Fat: ${targetFat} g`);
        }
        targetCal = tdee * (1 - calDeficit / 100);
        $('#bmr').text(`BMR: ${Math.round(bmr)} Calories`);
        $('#tdee').text(`TDEE: ${Math.round(tdee)} Calories`);
        $('#target-cal').text(`Target Calories: ${Math.round(targetCal)} Calories`);
    });
});