document.addEventListener('DOMContentLoaded', () => {

  // Creazione elementi HTML
  const counterContainer = document.createElement('div');
  counterContainer.id = 'counter-container';

  const decrementButton = document.createElement('button');
  decrementButton.id = 'decrement';
  decrementButton.textContent = '-';

  const counterElement = document.createElement('span');
  counterElement.id = 'counter';
  counterElement.textContent = '0';

  const incrementButton = document.createElement('button');
  incrementButton.id = 'increment';
  incrementButton.textContent = '+';

  // Aggiunta elementi container
  counterContainer.appendChild(decrementButton);
  counterContainer.appendChild(counterElement);
  counterContainer.appendChild(incrementButton);

  // Aggiunta container body
  document.body.appendChild(counterContainer);

  // Inizializzazione contatore
  let counter = 0;

  // Aggiunta event listener bottoni
  incrementButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
  });

  decrementButton.addEventListener('click', () => {
    counter--;
    counterElement.textContent = counter;
  });
});