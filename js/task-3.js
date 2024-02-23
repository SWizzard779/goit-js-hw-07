const inputField = document.querySelector('#name-input');
const spanField = document.querySelector('#name-output');

inputField.addEventListener('input', handleInput);

function handleInput(event) {
  console.log(event);
  const inputData = event.currentTarget.value;
  spanField.textContent = inputData.trim();

  if (inputData.length === 0 || inputData.trim() === '') {
    spanField.textContent = 'Anonymous';
  }
}

document.body.style.display = 'flex';
document.body.style.alignItems = 'flex-start';
document.body.style.justifyContent = 'flex-start';
document.body.style.flexDirection = 'column';
document.body.style.gap = '16px';
document.body.style.background = '#fff';

inputField.style.border = '1px solid #808080';
inputField.style.padding = '24px';
inputField.style.width = '360px';
inputField.style.height = '40px';
inputField.style.fontSize = '16px';

h1.style.color = '#2e2f42';
spanField.style.color = '#2e2f42';
h1.style.fontSize = '24px';
spanField.style.fontWeight = 600;
