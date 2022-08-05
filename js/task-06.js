const input = document.getElementById('validation-input');
const length = +input.dataset.length;
input.addEventListener('blur', ({ target }) => {
  if (length === target.value.length) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.add('invalid');
    target.classList.remove('valid');
  }
});
