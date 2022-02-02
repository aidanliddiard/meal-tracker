import { renderIngredient } from './utils.js';


const ingredientBtn = document.getElementById('add-ingredient');
const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');

let ingredients = [];

function renderIngredients() {
    ingredientList.textContent = '';
    for (let ingredient of ingredients){
        const ul = renderIngredient(ingredient);
        ingredientList.append(ul);
        console.log(ul);
    }
}

ingredientBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const ingredientObj = {
        name: data.get('ingredient'),
        need: data.get('need'),
        store: data.get('store'),
    };
    ingredients.push(ingredientObj);

    renderIngredients();
    form.reset();
});