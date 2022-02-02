import { renderIngredient, renderMeal } from './utils.js';

const ingredientBtn = document.getElementById('add-ingredient');
const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
const submitMealBtn = document.getElementById('save-meal-btn');
const input = document.getElementById('submit-meal');
const mealsList = document.getElementById('meal-list');


const removeBtn = document.getElementById('remove');

let ingredients = [];
let meals = [];

function renderIngredients() {
    ingredientList.textContent = '';
    for (let ingredient of ingredients){
        const ul = renderIngredient(ingredient);
        ingredientList.append(ul);
    }
}


function renderMeals() {
    mealsList.textContent = '';
    for (let meal of meals){
        const ul = renderMeal(meal);
        mealsList.append(ul);
    }
}

ingredientBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const ingredientObj = {
        name: data.get('ingredient'),
        need: data.get('need'),
        store: data.get('store')
    };
    ingredients.push(ingredientObj);

    renderIngredients();
    form.reset();
});

removeBtn.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});

submitMealBtn.addEventListener('click', () =>{
    const name = input.value;
    
    let listArray = [];
    for (let i of ingredients) {
        listArray.push(i.name);
    }

    const meal = {
        name: name,
        total: ingredients.length,
        list: listArray,
    };

    meals.push(meal);

    renderMeals();
    ingredients = [];
    renderIngredients();
});