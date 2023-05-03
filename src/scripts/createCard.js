import { insertedValues } from "./valuesData.js";

export function reedUl(array) {
    const ul = document.querySelector('.list__Itens');

    ul.innerHTML = '';

    array.forEach((item) => {
        ul.append(createCard(array, item));
    })

    sum(array);

}

export function createCard(array, item) {

        const itens = document.createElement('li');
        itens.classList.add('itens__list');

        const value = document.createElement('span');
        value.textContent = `R$ ${item.value.toFixed(2).replace(".", ",")}`;
        value.classList.add('value__item');

        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container__filter--button')

        const filter = document.createElement('span');
        filter.classList.add('filter__item');
        if (item.categoryID == 0) {
            filter.textContent = 'Entrada';
        } else {
            filter.textContent = 'Saída';
        }

        const image = document.createElement('img');
        image.src = './src/assets/trash.png';
        image.classList.add('image__list');
        image.setAttribute('id', item.id);

        // OBS REMOVER OS VALORES E O ITEM CORRESPONDENTE!

        image.addEventListener('click', (event) => {

            const id = Number(event.target.id);

            removeItem(array, id);
            
        });

        containerDiv.appendChild(filter);
        containerDiv.appendChild(image);
        itens.append(value, containerDiv);

        return itens;
}

function removeItem(array, id){
    const findItem = array.findIndex(element => element.id === id);
    
    array.splice(findItem, 1)
    reedUl(array); 
}

// filtrando elementos nos botões!

export function handerButton(array) {
    const buttonAll = document.querySelector('#button__all');
    const buttonProhibited = document.querySelector('#button__Prohibited');
    const buttonExit = document.querySelector('#button__exit');

    buttonAll.addEventListener('click', () => {
        reedUl(array);
        sum(array);
    });

    buttonProhibited.addEventListener('click', () => {
        const prohibitedElement = array.filter((element) => {
            return element.categoryID === 0;
        });
        reedUl(prohibitedElement);
        sum(prohibitedElement);
    });

    buttonExit.addEventListener('click', () => {
        const exitElement = array.filter((element) => {
            return element.categoryID === 1;
        });
        reedUl(exitElement);
        sum(exitElement);
    });

}

export function sum(array) {

    const total = document.querySelector('#total__sum')

    let sumCount = array.reduce((accumulator, element) => accumulator + element.value, 0)

    total.innerText = `R$ ${sumCount.toFixed(2).replace('.', ',')}`;

}   




