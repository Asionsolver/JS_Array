const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
const result = matrix.reduce((acc, cur) => {
    return acc.map((value, index) => {
        return value + cur[index];
    });
});

console.log(result);

// More complex example

const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transpose = matrixA => matrixA[0].map((_, i) => matrixA.map(row => row[i]));
  
  const verticalSum = transpose(matrixA).map(column => column.reduce((acc, curr) => acc + curr));
  
  console.log(verticalSum); // Output: [12, 15, 18]


// Vertical sum using Reduce and forEach method

  const matrixC = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const verticalSum2 = matrixC.reduce((acc, row) => {
    row.forEach((num, index) => {
      acc[index] = (acc[index] || 0) + num;
    });
    return acc;
  }, []);
  
  console.log(verticalSum2); // Output: [12, 15, 18]

  // Vertical sum using map method

  const matrixD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transposeB = matrixD[0].map((col, i) => matrixD.map(row => row[i]));
  const verticalSum3 = transposeB.map(column => column.reduce((acc, curr) => acc + curr, 0));
  
  console.log(verticalSum3); // Output: [12, 15, 18]
  
  
// Vertical sum using map and forEach method

  const matrixE = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const verticalSum4 = matrixE[0].map((col, i) => {
    let sum = 0;
    matrixE.forEach(row => sum += row[i]);
    return sum;
  });
  
  console.log(verticalSum4); // Output: [12, 15, 18]
  
  
  // Vertical sum using forEach method

  const matrixF = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const verticalSum5 = [];
  
  matrixF.forEach(row => {
    row.forEach((element, index) => {
      if (verticalSum5[index] === undefined) {
        verticalSum5[index] = element;
      } else {
        verticalSum5[index] += element;
      }
    });
  });
  
  console.log(verticalSum5); // Output: [12, 15, 18]
  