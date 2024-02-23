const listAmount = document.querySelectorAll('.item');
console.log(`Number of categories: ${listAmount.length}`);

const h2Elements = document.querySelectorAll('h2');

h2Elements.forEach(h2 => {
  const ul = h2.nextElementSibling;
  const lis = ul.querySelectorAll('li');
  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${lis.length}`);
});

// const ulList = document.querySelector('#categories');

// ulList.style.display = 'flex';
// ulList.style.alignItems = 'flex-start';
// ulList.style.justifyContent = 'flex-start';
// ulList.style.flexDirection = 'column';
// ulList.style.gap = '24px';
// ulList.style.backgroundColor = '#fff';
// ulList.style.borderRadius = '8px';
// ulList.style.padding = '24px';
// ulList.style.width = '440px';

// const listItem = document.querySelector('.item');

// listItem.style.display = 'flex';
// listItem.style.alignItems = 'flex-start';
// listItem.style.justifyContent = 'flex-start';
// listItem.style.flexDirection = 'column';
// listItem.style.gap = '16px';
// listItem.style.borderRadius = '8px';
// listItem.style.padding = '16px';
// listItem.style.width = '392px';
// listItem.style.backgroundColor = '#f6f6fe';
