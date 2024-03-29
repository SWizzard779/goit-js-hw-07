function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
btn.addEventListener('click', handleBtn);

const colorSpan = document.querySelector('.color');

function handleBtn(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

btn.style.borderRadius = '8px';
btn.style.backgroundColor = '#4e75ff';
btn.style.padding = '8px 16px';
btn.style.width = '148px';
btn.style.height = '40px';
btn.style.color = '#fff';
btn.style.borderStyle = 'none';
