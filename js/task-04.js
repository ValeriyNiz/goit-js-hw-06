let counterValue = 0;
const counterWrapper = document.getElementById('value');

document.querySelector('button[data-action="decrement"]').addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

document.querySelector('button[data-action="increment"]').addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

const updateCounter = () => {
  counterWrapper.textContent = counterValue;
};
