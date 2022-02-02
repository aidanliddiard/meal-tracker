const ingredientBtn = document.getElementById('add-ingredient');

let ingredients = [];

ingredientBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const ingredientObj = {
        ingredient: data.get('ingredient'),
        need: data.get('need'),
        store: data.get('store'),
    };
    ingredients.push(ingredientObj);

    renderIngredients();
    form.reset();
});