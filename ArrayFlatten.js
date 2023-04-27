let nestedArray = [[1, 2], [3, 4], 5, [6, 7]];
// [1, 2, 3, 4, 5, 6, 7]

// Array Flat Method

const flat1 = nestedArray.flat();
console.log(flat1);

// We can do the same thing with reduce method

const flat2 = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);
console.log(flat2);
