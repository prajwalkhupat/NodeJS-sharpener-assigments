const originalArray = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const transformedArray = originalArray.map(item => {
  return item.trim() === '' ? 'empty string' : item;
});

console.log(transformedArray);
