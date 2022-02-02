export function renderIngredient(object) {
    const h3 = document.createElement('h3');
    h3.textContent = object.name;
    const ul = document.createElement('ul');
    const liNeed = document.createElement('li');
    liNeed.textContent = object.need;
    const liStore = document.createElement('li');
    liStore.textContent = object.store;

    ul.append(h3, liNeed, liStore);

    return (ul);
}
export function renderMeal(object) {
    const ul = document.createElement('ul');
    const h2 = document.createElement('h2');
    h2.textContent = `${object.name} (${object.total})`;

    ul.append(h2);
    
    for (let i of object.list) {
        const li = document.createElement('li');
        li.textContent = i;
        ul.append(li);
    }
    
    return ul;
}