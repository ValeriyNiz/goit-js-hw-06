const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  console.log(`Category: ${category.firstElementChild.innerHTML}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
