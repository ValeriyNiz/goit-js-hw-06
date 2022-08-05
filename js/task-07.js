const input = document.getElementById('font-size-control');
const textWrapper = document.getElementById('text');
input.addEventListener('input', event => {
  textWrapper.style.fontSize = `${event.target.value}px`;
});
