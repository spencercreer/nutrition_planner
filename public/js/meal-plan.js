$(document).ready(function () {

    // Get food data from database
    $.get('/api/food_data').then(function (data) {
        data.forEach(food => {
            $('#modal-body').append(`
            <div class="row">
            <button id=${food.id} class=add-button>+</button><p style="display: inline-block">${food.name} ${food.serving_size} ${food.carbs} ${food.protein} ${food.fat}</p>
            </div>  
            `);
        });
        $('.add-button').click(function () {
            $('#meal-input').val(data[this.id-1].name);
            $('#staticBackdrop').modal('hide');
        });
    });

    // Get recipe data from database
    $.get('/api/recipe_data').then(function (data) {
        data.forEach(recipe => {
            $('#recipe-modal-body').append(`
            <div class="row">
            <button id=${recipe.id} class=add-button>+</button><p style="display: inline-block">${recipe.name} ${recipe.serving_size} ${recipe.carbs} ${recipe.protein} ${recipe.fat}</p>
            </div>  
            `);
        });
        $('.add-button').click(function () {
            $('#meal-input').val(data[this.id-1].name);
            $('#staticBackdrop2').modal('hide');
        });
    });

    $('#addMealBtn').click(function(event) {
        event.preventDefault();
        
        mealValue = $('#meal-input').val();
        meal = $('#meal').val();
        console.log(mealValue);
        console.log(meal);
        if(meal === 1) {
            $('#breakfastPlan').append(`<li>${mealValue}</li>`);
        } else if(meal === '2') {
            $('#lunchPlan').append(`<li>${mealValue}</li>`);
        } else if(meal === '3') {
            $('#dinnerPlan').append(`<li>${mealValue}</li>`);
        } else if(meal === '4') {
            $('#snackPlan').append(`<li>${mealValue}</li>`);
        } else {
            $('#dessertPlan').append(`<li>${mealValue}</li>`);
        }
        
    })
});