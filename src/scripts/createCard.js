import { insertCard } from "./modal.js";
import { insertedValues, valuesCategory } from "./valuesData.js";

const main = document.querySelector('#app');
 
const listItens = document.createElement('ul');
listItens.classList.add('list__Itens');
main.appendChild(listItens);


export function createCard(insertedValues){

    insertedValues.forEach((item) => {
    
        const itens = document.createElement('li');
        itens.classList.add('itens__list');
    
        listItens.appendChild(itens);
    
        const value = document.createElement('span');
        value.textContent = `R$ ${item.value.toFixed(2).replace('.', ',')}`;
        value.classList.add('value__item');
    
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container__filter--button')
    
        const filter = document.createElement('span');
        filter.classList.add('filter__item');
        if(item.categoryID == 0){
            filter.textContent = 'Entrada';
        }else{
            filter.textContent = 'Saída';
        }
    
        const image = document.createElement('img');
        image.src = './src/assets/trash.png';
        image.classList.add('image__list');
        image.addEventListener('click', (event) => {

            itens.remove();

            
        const id = event.target.dataset.id;
        insertedValues = insertedValues.filter((element) =>{
            return element.id !== item.id;
        });
        
        });
        
        containerDiv.appendChild(filter);
        containerDiv.appendChild(image);
        itens.append(value, containerDiv);
    });
}

// filtrando elementos nos botões!
 
export function handerButton() {
    const buttonAll = document.querySelector('#button__all');
    const buttonProhibited = document.querySelector('#button__Prohibited');
    const buttonExit = document.querySelector('#button__exit');

    buttonAll.addEventListener('click', () => {
        listItens.innerHTML = ''
        const allElement = insertedValues;
        createCard(allElement);
        sum('all');
    });

    buttonProhibited.addEventListener('click', () => {
        listItens.innerHTML = ''
        const prohibitedElement = insertedValues.filter((element) => {
            return element.categoryID === 0;
    });
        createCard(prohibitedElement);
        sum(0);
    });

    buttonExit.addEventListener('click', () => {
        listItens.innerHTML = ''
        const exitElement = insertedValues.filter((element) => {
            return element.categoryID === 1;
        });
        createCard(exitElement);
        sum(1);
    });

}

export function sum(categoryID) {
    const value = insertedValues;
    const total = document.querySelector('#total__sum') 

    const filtered = value.filter((item) => {
        return (categoryID === 'all' || item.categoryID === parseFloat(categoryID));
    });

    const soma = filtered.reduce((total, item) => {
        if(categoryID === 'all' || item.categoryID === parseFloat(categoryID)){
            return total + item.value;
        }else{
            return total;
        }
    }, 0);

    total.textContent = `R$ ${soma.toFixed(2).replace('.', ',')}`

}

sum();
;





