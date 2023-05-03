import { createCard, reedUl, sum } from "./createCard.js";
import { insertedValues } from "./valuesData.js";

/* Desenvolva sua lógica aqui */
const listItens = document.querySelector('ul');
const inputModal = document.querySelector('#input__modal');
const buttonProhibited = document.querySelector('#Prohibited');
const buttonExit = document.querySelector('#exit');
const buttonCancel = document.querySelector('#cancel');
const buttonInsert = document.querySelector('#insert');
const OpenModalButton = document.querySelector('.button__header');
const closeModalButton = document.querySelector('.modal__header--button');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

// abrir e fechar modal!
window.addEventListener('load', () => {

    const toggleModal = () => {
        modal.classList.toggle('hide');
        fade.classList.toggle('hide');
    };
    
    OpenModalButton.addEventListener('click', () => {
        inputModal.value = '';
        toggleModal();
    });
    
    closeModalButton.addEventListener('click', () => {
        toggleModal();
    });
    
})


// inserindo novos valores no input!

export function insertCard() {

    buttonInsert.addEventListener('click', () => {

        if(isNaN(inputModal.value)){
            alert('Digite um valor numérico válido');
            inputModal.value = '';
            return;
        }

        const newCard = {
            id: insertedValues.length + 1,
            value: parseFloat(inputModal.value),
            categoryID: selectCategory, 
        }

        insertedValues.push(newCard);
        reedUl(insertedValues);
        sum('all');

    });
    
    let selectCategory = '';

    buttonProhibited.addEventListener('click', () => {
        selectCategory = 0;
         sum('all');
    });

    buttonExit.addEventListener('click', () => {
         selectCategory = 1;
         sum(0);
    });

    buttonCancel.addEventListener('click', () => {
        inputModal.value = '';
        sum(1);
    });
   
};






