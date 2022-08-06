const form = document.querySelector('.login-form');
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!emailInput.value || !passwordInput.value) {
    alert('Все поля должны быть заполнены!!!');
    return;
  }

  console.log({
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
  });

  form.reset();
});
