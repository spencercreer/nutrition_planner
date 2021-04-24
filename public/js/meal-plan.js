$(document).ready(function () {

    // Get food data from database
    $.get('/api/food_data').then(function (data) {
        data.forEach(food => {
            $('#food-modal-body').append(`
            <tr>
                <th scope="row"><button id=${food.id} class=add-button>+</button></th>
                <td>${food.name}</td>
                <td>${food.serving_size}</td>
                <td>${Math.round(food.carbs)} g</td>
                <td>${Math.round(food.protein)} g</td>
                <td>${Math.round(food.fat)} g</td>
                <td>${Math.round(food.sodium)} g</td>
            </tr>
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
            <tr>
                <th scope="row"><button id=${recipe.id} class=add-button>+</button></th>
                <td>${recipe.name}</td>
                <td>${recipe.serving_size}</td>
                <td>${Math.round(recipe.carbs)} g</td>
                <td>${Math.round(recipe.protein)} g</td>
                <td>${Math.round(recipe.fat)} g</td>
                <td>${Math.round(recipe.sodium)} g</td>
            </tr>
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
        if(meal === '1') {
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