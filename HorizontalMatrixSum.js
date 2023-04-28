const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matrixSum = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

// Horizontal Sum of Matrix using Only Reduce Function
  
  const horizontalSum = matrix.reduce((acc, current) => {
    const sum = current.reduce((acc, curr) => acc + curr, 0);
    acc.push(sum);
    return acc;
  }, []);
  
  console.log(horizontalSum); // Output: [6, 15, 24]


// Horizontal Sum of Matrix using Map and Reduce Function

const horizontalSumReduce = matrixSum.map((value) => {
  return value.reduce((previous, current) => {
    return previous + current;
  });
});

// console.log(horizontalSumReduce);

// Horizontal Sum of Matrix using Map and forEach Function

const horizontalSumForEach = matrixSum.map((value) => {
  let sum = 0;
  value.forEach((element) => {
    sum += element;
  });
  return sum;
});

console.log(horizontalSumForEach); // Output: [6, 15, 24]