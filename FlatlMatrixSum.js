const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flatSum = matrix.reduce((acc, cur) => {
  return acc + cur.reduce((acc, cur) => acc + cur);
}, 0);

console.log(flatSum); // Output: 45