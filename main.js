var addNewBtn = document.querySelector('.add-new-button');
var addRecipeBtn = document.querySelector('.addRecipeBtn');
var clearBtn = document.querySelector('.clear-food');
var letsCookBtn = document.querySelector('.lets-cook');
var dessertRadioBtn = document.getElementById('dessert');
var entireMealRadioBtn = document.getElementById('meal');
var mainDishRadioBtn = document.getElementById('main');
var sideDishRadioBtn = document.getElementById('side');
var addRecipeFooter = document.querySelector('footer');
var addRecipeInput = document.getElementById('meal-input');
var foodSuggestionField = document.querySelector('.food-suggestion');
var youShouldMakeText = document.querySelector('.you-should-make');
var recipeScrollSelection = document.querySelector('.recipe-selector');

addNewBtn.addEventListener('click', displayYourRecipe)
addRecipeBtn.addEventListener('click', addARecipe);
clearBtn.addEventListener('click', clearRecipe);
letsCookBtn.addEventListener('click', showRandomRecipe);

function selectRandomFoods(array) {
    return Math.floor(Math.random() * array.length);
}

function hide(element) {
    element.classList.add('hidden');
    }
  
function show(element) {
    element.classList.remove('hidden');
    }

function clearRecipe() {
    hide(foodSuggestionField);
    hide(youShouldMakeText);
    hide(clearBtn);
    show(cookPot);
}

function showRandomRecipe(event) {
    event.preventDefault()
    hide(cookPot);
    show(foodSuggestionField);
    show(youShouldMakeText);
    if (sideDishRadioBtn.checked) {
      foodtxt.innerText = sides[selectRandomFoods(sides)];
      show(clearBtn);
    } else if (mainDishRadioBtn.checked) {
      foodtxt.innerText = mains[selectRandomFoods(mains)];
      show(clearBtn);
    } else if (dessertRadioBtn.checked) {
      foodtxt.innerText = desserts[selectRandomFoods(desserts)];
      show(clearBtn);
    } else if (entireMealRadioBtn.checked) {
        displayEntireMeal();
    } else {
        noMealTypeSelected();
    }
}

function displayEntireMeal() {
    var entireMeal = new Meal(
    sides[selectRandomFoods(sides)],
    mains[selectRandomFoods(mains)],
    desserts[selectRandomFoods(desserts)],
    )
    foodtxt.innerText = `${entireMeal.main} with a side of ${entireMeal.side} and ${entireMeal.dessert} for dessert!`;
    show(clearBtn);
}

function noMealTypeSelected() {
    if (!sideDishRadioBtn.checked) {
        foodtxt.innerText = "Please select which type of meal you are looking for";
      } else if (mainDishRadioBtn.checked) {
        foodtxt.innerText = "Please select which type of meal you are looking for";
      } else if (dessertRadioBtn.checked) {
        foodtxt.innerText = "Please select which type of meal you are looking for";
      } else if (entireMealRadioBtn.checked) {
        foodtxt.innerText = "Please select which type of meal you are looking for";
}
    hide(clearBtn);
    hide(youShouldMakeText);
}  

function addARecipe() {
    show(addRecipeFooter);
    show(cookPot);
    hide(clearBtn);
    hide(foodSuggestionField);
    hide(youShouldMakeText); 
};

function displayYourRecipe(e) {
    e.preventDefault()
    hide(cookPot);
    hide(addRecipeFooter);
    show(foodSuggestionField);
    show(youShouldMakeText);
    show(clearBtn);
    if(recipeScrollSelection.value === 'side') {
        sides.push(addRecipeInput.value);
        foodtxt.innerText = `${addRecipeInput.value}!`;
      } else if (recipeScrollSelection.value === 'main') {
        mainDishes.push(addRecipeInput.value);
        foodtxt.innerText = `${addRecipeInput.value}!`;
      } else if (recipeScrollSelection.value === 'dessert') {
        desserts.push(foodtxt.value);
        foodtxt.innerText = `${addRecipeInput.value}!`;
    }
  }