const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  if (elements.email.value.length === 0 || elements.password.value.length === 0) {
    alert('All form fields must be filled in');
  }

  const inputData = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  console.log(inputData);

  event.currentTarget.reset();
}

form.style.display = 'flex';
form.style.alignItems = 'flex-start';
form.style.justifyContent = 'flex-start';
form.style.flexDirection = 'column';
form.style.gap = '16px';

const labelEmail = document.querySelector('.label-email');

labelEmail.style.display = 'flex';
labelEmail.style.alignItems = 'flex-start';
labelEmail.style.justifyContent = 'flex-start';
labelEmail.style.flexDirection = 'column';
labelEmail.style.gap = '8px';

const labelPassword = document.querySelector('.label-password');

labelPassword.style.display = 'flex';
labelPassword.style.alignItems = 'flex-start';
labelEmail.style.justifyContent = 'flex-start';
labelPassword.style.flexDirection = 'column';
labelPassword.style.gap = '8px';

const inputEmail = document.querySelector('.input-email');

inputEmail.style.width = '360px';
inputEmail.style.height = '40px';
inputEmail.style.border = '1px solid #808080';
inputEmail.style.borderRadius = '4px';

const inputPassword = document.querySelector('.input-password');

inputPassword.style.width = '360px';
inputPassword.style.height = '40px';
inputPassword.style.border = '1px solid #808080';
inputPassword.style.borderRadius = '4px';

const btn = document.querySelector('.btn');

btn.style.borderRadius = '8px';
btn.style.padding = '8px 16px';
btn.style.width = '86px';
btn.style.height = '40px';
btn.style.background = '#4e75ff';
btn.style.borderStyle = 'none';
btn.style.color = '#fff';
