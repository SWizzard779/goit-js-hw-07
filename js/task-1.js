const listAmount = document.querySelectorAll('.item');
console.log(`Number of categories: ${listAmount.length}`);

const h2Elements = document.querySelectorAll('h2');

h2Elements.forEach(h2 => {
  const ul = h2.nextElementSibling;
  const lis = ul.querySelectorAll('li');
  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${lis.length}`);
});
