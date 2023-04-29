/**
* @title Map and Filter using Reduce Method
*/

// Map Method

// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = arr1.reduce((acc, curr) => {
//     acc.push(curr * curr);
//     return acc;
// }, []);

// console.log(arr2); // Output: [1, 4, 9, 16, 25]

// Filter Method

// const arr3 = [1, 2, 3, 4, 5, 6];

// const arr4 = arr3.reduce((acc, curr) => {
//     if (curr % 2 === 0) {
//         acc.push(curr);
//     }
//     return acc;
// }, []);

// console.log(arr4); // Output: [2, 4, 6]

// Big Array

const bigArray = [];

for (let i = 0; i < 50000000; i++) {
    bigArray.push(i);
}


// Map and Filter Chain - Time Efficiency

console.time('Both')
bigArray.filter(num => num % 2 === 0).map(num => num * num);
console.timeEnd('Both'); 



// Map and Filter Reduce - Time Efficiency

console.time('Reduce')
bigArray.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.push(curr * curr);
    }
    return acc;
}, []);

console.timeEnd('Reduce');

