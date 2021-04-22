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
            $('#food-input').val(data[this.id-1].name);
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
            $('#recipe-input').val(data[this.id-1].name);
            $('#staticBackdrop2').modal('hide');
        });
    });

});