const output = document.getElementById('name-output');
document.getElementById('name-input').addEventListener('input', event => {
  output.textContent = event.target.value || 'Anonymous';
});
