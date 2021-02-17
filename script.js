$(document).ready(function(){
  let meals = ["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner", "Snack 3"]
    for (let i = 0; i < 6; i++) {
        $("#meal-schedule").append(
            `<div class="meal">
            <div class="input-group">
                <div class="input-group-prepend">
                </div>
                <input type="text" aria-label="Meal" class="form-control col-4">
                <input type="text" aria-label="Amount" class="form-control col-1">
                <span class="br-0 col-1 input-group-text"></span>
                <span class="br-0 col-1 input-group-text"></span>
                <span class="br-0 col-1 input-group-text"></span>
                <span class="carb col-1 input-group-text"></span>
                <span class="protein col-1 input-group-text"></span>
                <span class="fat col-1 input-group-text"></span>
                <span class="sodium col-1 input-group-text"></span>
              </div>
              <div class="input-group">
                  <div class="input-group-prepend">
                  </div>
                  <input type="text" aria-label="Meal" class="form-control col-4">
                  <input type="text" aria-label="Amount" class="form-control col-1">
                  <span class="br-0 col-1 input-group-text"></span>
                  <span class="br-0 col-1 input-group-text"></span>
                  <span class="br-0 col-1 input-group-text"></span>
                  <span class="carb col-1 input-group-text"></span>
                  <span class="protein col-1 input-group-text"></span>
                  <span class="fat col-1 input-group-text"></span>
                  <span class="sodium col-1 input-group-text"></span>
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                  </div>
                  <input type="text" aria-label="Meal" class="form-control col-4">
                  <input type="text" aria-label="Amount" class="form-control col-1">
                  <span class="br-0 col-1 input-group-text"></span>
                  <span class="br-0 col-1 input-group-text"></span>
                  <span class="br-0 col-1 input-group-text"></span>
                  <span class="carb col-1 input-group-text"></span>
                  <span class="protein col-1 input-group-text"></span>
                  <span class="fat col-1 input-group-text"></span>
                  <span class="sodium col-1 input-group-text"></span>
                </div>
        </div>`
        )
        
    }

});