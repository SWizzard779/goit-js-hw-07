function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('button[data-create]');
btn.addEventListener('click', handleCreate);

const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';

  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    size += 10;
  }
}
const inputField = document.querySelector('input[type=number]');
function handleCreate(event) {
  const inputValue = parseInt(inputField.value, 10);

  if (inputValue >= 1 && inputValue < 100) {
    createBoxes(inputValue);
    inputField.value = '';
  } else {
    !createBoxes(inputValue);
  }
}

const btnDestroy = document.querySelector('button[data-destroy]');
btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

const controls = document.querySelector('#controls');
controls.style.display = 'flex';
controls.style.alignItems = 'center';
controls.style.justifyContent = 'flex-start';
controls.style.flexDirection = 'row';
controls.style.gap = '10px';
inputField.style.border = '1px solid #808080';
inputField.style.borderRadius = '8px';
inputField.style.padding = '8px 12px';
inputField.style.width = '150px';
inputField.style.height = '40px';

btn.style.borderRadius = '8px';
btn.style.padding = '8px 16px';
btn.style.width = '120px';
btn.style.height = '40px';
btn.style.background = '#4e75ff';
btn.style.borderStyle = 'none';
btn.style.color = '#fff';

btnDestroy.style.borderRadius = '8px';
btnDestroy.style.padding = '8px 16px';
btnDestroy.style.width = '120px';
btnDestroy.style.height = '40px';
btnDestroy.style.background = '#fF4e4e';
btnDestroy.style.borderStyle = 'none';
btnDestroy.style.color = '#fff';

boxesContainer.style.display = 'flex';
boxesContainer.style.alignItems = 'flex-start';
boxesContainer.style.justifyContent = 'flex-start';
boxesContainer.style.flexDirection = 'column';
boxesContainer.style.gap = '10px';
