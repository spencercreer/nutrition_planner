$(document).ready(function(){
    $('#calculateBtn').on('click', function(event){
        event.preventDefault();
        let gender = 'male';
        let weight = $('#weight').val();
        let height = $('#height').val();
        let age = $('#age').val();
        let bfp = $('#bfp').val();
        let goalWeight = $('#goal-weight').val();
        let goalBFP = $('#goal-bfp').val();
        let goalBF = goalWeight * goalBFP/100;
        let bmr;
        let tdee;
        let calDeficit;
        let targetCal
        $('#goal-bf').attr('placeholder', goalBF);
        $('#goal-lbm').attr('placeholder', goalWeight- goalBF);
        // BMR = 370 + 21.6 x LBM(kg)
        if(gender == 'male'){
            // (men) BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) + 5
            bmr = 10 * 0.45359 * weight + 6.25 * height * 2.54 - 5 * age + 5;
        } else {
            // (women) BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age in yr) - 161
            bmr = 10 * 0.45359 * weight + 6.25 * height * 2.54 - 5 * age - 161;         
        }
        tdee = 1.5 * bmr;
        calDeficit = 20;
        targetCal = tdee * (1 - calDeficit/100);
        $('#bmr').attr('placeholder', Math.round(bmr));
        $('#tdee').attr('placeholder', Math.round(tdee));
        $('#cal-deficit').attr('placeholder', calDeficit);
        $('#target-cal').attr('placeholder', Math.round(targetCal));
    });
})