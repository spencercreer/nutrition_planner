$(document).ready(function () {

    var userId;
    var foodId;
    var mealPlanName;
    var mealPlan = [];

    $.get('/api/user_data').then(function (userData) {
        userId = userData.id
    });

    // Get food data from database
    $.get('/api/food_data').then(function (foodData) {
        foodData.forEach(food => {
            $('#food-modal-body').append(`
            <tr>
                <th scope="row"><button id=${food.id} class=food-add-button>+</button></th>
                <td>${food.name}</td>
                <td>${food.serving_size}</td>
                <td>${Math.round(food.carbs)} g</td>
                <td>${Math.round(food.protein)} g</td>
                <td>${Math.round(food.fat)} g</td>
                <td>${Math.round(food.sodium)} g</td>
            </tr>
            `);
        });
        $('.food-add-button').click(function () {
            $('#meal-input').val(foodData[this.id-1].name);
            foodId = this.id;
            $('#staticBackdrop').modal('hide');
        });
    });

    // Get recipe data from database
    $.get('/api/recipe_data').then(function (recipeData) {
        recipeData.forEach(recipe => {
            $('#recipe-modal-body').append(`
            <tr>
                <th scope="row"><button id=${recipe.id} class=recipe-add-button>+</button></th>
                <td>${recipe.name}</td>
                <td>${recipe.serving_size}</td>
                <td>${Math.round(recipe.carbs)} g</td>
                <td>${Math.round(recipe.protein)} g</td>
                <td>${Math.round(recipe.fat)} g</td>
                <td>${Math.round(recipe.sodium)} g</td>
            </tr>
            `);
        });
        $('.recipe-add-button').click(function () {
            $('#meal-input').val(recipeData[this.id-1].name);
            foodId = this.id;
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
    });

    $('#createMealPlanBtn').click(function(event) {
        event.preventDefault();

        mealPlanName = $('#mp-name').val();
        let mealPlan = {
            mealPlanName: mealPlanName.trim(),
            user_id: userId
        }
        fetch('/api/meal_plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mealPlan)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success in submitting mealPlan:', data)
        })
        .catch((error) => {
            console.error('Error:', error)
        });
    });

    $('#saveMealPlanBtn').click(function(event) {
        event.preventDefault();

    });
});