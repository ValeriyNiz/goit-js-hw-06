function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxWraper = document.getElementById('boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');

createBtn.addEventListener('click', () => {
  createBoxes(+input.value || 0);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount > 100) {
    input.value = 100;
    return;
  }

  const boxes = [];

  for (let i = 0, size = 30; i < amount; i++, size += 10) {
    const box = document.createElement('div');

    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.background = getRandomHexColor();

    boxes.push(box);
  }

  boxWraper.append(...boxes);
}

function destroyBoxes() {
  boxWraper.innerHTML = '';
}
