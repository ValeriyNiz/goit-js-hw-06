function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorOutput = document.querySelector('.color');
const button = document.querySelector('.change-color');
button.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorOutput.textContent = color;
});
