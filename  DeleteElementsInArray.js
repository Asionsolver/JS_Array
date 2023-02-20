/*** Delete Specific Element***/

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Remove First Element
// number.shift();

// Remove Last Element
// number.pop();
// number.length = number.length - 1;

// Remove Index Elements - Splice using index
// number.splice(1,1);

// Remove Index Elements - Splice using value
// const toRemove = 4;

// for(let i = 0; i < number.length; i++) {
//     if(number[i] === toRemove) {
//         number.splice(i, 1);
//     }
// }

// Remove Index Elements - Filter

// const toRemove = 4;

// number = number.filter(item => item !== toRemove)


// Remove Index Elements - Delete Operator (Object property deleted operator) - Not recommended
// delete number[0];


// Reset Whole Array
// let x = [1,2,3]
// let y = x
// x = []
// console.log(x,y)

// Alternative Way
let x = [1,2,3]
let y = x
x.length = 0
console.log(x,y)


// Reset array using while loop and pop method
while(number.length) number.pop()


console.log(number)

const arr2 = [1,2,3];
const arr3 = [4,5,6];


// Concatenate two arrays
// const arr4 = arr2.concat(arr3);
// console.log(arr4);

// Spread Operator
// const arr5 = [...arr2, ...arr3];
// console.log(arr5);

// Another way to concatenate two arrays

const arr6 = [].concat(arr2, arr3,7,8,9);
console.log(arr6);