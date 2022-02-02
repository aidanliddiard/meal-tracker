export function renderIngredients(object) {
    const h3 = document.createElement('h3');
    h3.textContent = object.ingredient;
    const ul = document.createElement('ul');
    const liNeed = document.createElement('li');
    liNeed.textContent = object.need;
    const liStore = document.createElement('li');
    liStore.textContent = object.store;

    ul.append(h3, liNeed, liStore);

    return (ul);

}