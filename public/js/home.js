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
        let goalNum = data.goal;
        let goalWeight = data.goal_weight;
        let goalBfp = data.goal_bfp;
        // Declare variables
        let bmr;
        let tdee;
        let calDeficit;
        let targetCal;
        let targetCarbPct;
        let targetProPct;
        let targetFatPct;
        let targetCarbCal;
        let targetProCal;
        let targetFatCal;
        let targetCarbG;
        let targetProG;
        let targetFatG;
        
        // Determine goal text based on goal number from database
        let goal;
        if (goalNum === '1') {
            goal = 'Lose Fat';
        } else if (goalNum === '2') {
            goal = 'Maintain Weight';
        } else if (goalNum === '3') {
            goal = 'Build Muscle';
        }

        
        // Calculate BMR based on user values
        // BMR = 370 + 21.6 x LBM(kg)
        // (men) BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) + 5
        // (women) BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) - 161
        if (gender === 'male') {
            bmr = Math.round(10 * 0.45359 * weight + 6.25 * height * 2.54 - 5 * age + 5);
        } else {
            bmr = Math.round(10 * 0.45359 * weight + 6.25 * height * 2.54 - 5 * age - 161);
        }
        
        // Calculate TDEE based on BMR and user activity
        // TDEE = activity multiplier x BMR
        if(activity === "1"){
            tdee = Math.round(1.15 * bmr);
        } else if (activity === "2") {
            tdee = Math.round(1.3 * bmr);
        } else if (activity === "3") {
            tdee = Math.round(1.5 * bmr);  
        } else if (activity === "4") {
            tdee = Math.round(1.7 * bmr);
        } else if (activity === "5") {
            tdee = Math.round(1.9 * bmr);
        }
        
        // Determine calorie deficit, carbs, protein, and fat based on goal
        if (goalNum === "1") {
            calDeficit = 20;
            targetCarbPct = 0.4;
            targetProPct = 0.4;
            targetFatPct = 0.2;
            $('#cal-deficit').text(`Calorie Deficit: ${calDeficit}%`);
        } else if (goalNum === "2") {
            calDeficit = 0;
            targetCarbPct = 0.45;
            targetProPct = 0.3;
            targetFatPct = 0.25;
            $('#cal-deficit').text(`Calorie Deficit: ${calDeficit}%`);
        } else if (goalNum === "3") {
            calDeficit = -10;
            targetCarbPct = 0.55;
            targetProPct = 0.25;
            targetFatPct = 0.2;
            $('#cal-deficit').text(`Calorie Surplus: 10%`);
        }

        // Calculate target calories, carbs, protein, and fat
        targetCal = Math.round(tdee * (1 - calDeficit / 100));
        targetCarbCal = targetCal * targetCarbPct;
        targetProCal = targetCal * targetProPct;
        targetFatCal = targetCal * targetFatPct;
        targetCarbG = targetCarbCal/4;
        targetProG = targetProCal/4;
        targetFatG = targetFatCal/4;
        
        // Generate html
        $('#intro').text(`${firstName} ${lastName}'s Commit Profile`);
        $('#goal').text(`Commit Goal: ${goal}`)
        $('#weight').text(`Weight: ${weight} lb`);
        $('#goal-weight').text(`Goal Weight: ${goalWeight} lb`);
        
        $('#bmr').text(`BMR: ${bmr} Calories`);
        $('#tdee').text(`TDEE: ${tdee} Calories`);
        $('#target-cal').text(`Target Calories: ${targetCal} Calories`);

        $('#target-carb').text(`Target Carbs: ${targetCarbG} g`);
        $('#target-pro').text(`Target Protein: ${targetProG} g`);
        $('#target-fat').text(`Target Fat: ${targetFatG} g`);

        // Macronutrient Pie Chart
        var data = [{
            values: [targetCarbCal, targetProCal, targetFatCal],
            labels: ['Carbs (cal)', 'Protein (cal)', 'Fat (cal)'],
            type: 'pie'
        }];
        
          var layout = {
            height: 400,
            width: 500
          };
          
          Plotly.newPlot('myDiv', data, layout);
    });
});