/* Desenvolva sua lógica aqui */
import {toggleModal, insertCard} from "./modal.js";
import { createCard, handerButton, sum} from "./createCard.js";
import { insertedValues } from "./valuesData.js";

// função abrir e fechar modal!
toggleModal();

// criando elemento

createCard(insertedValues);
handerButton(insertedValues);
sum('all');
insertCard();
