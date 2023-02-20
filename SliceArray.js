/* ! Slice Array */

// Array like object to array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Slice array
const sliceArr = arr.slice(2, 5);
console.log(sliceArr); // [3, 4, 5]

// Clone array

const cloneArr = arr.slice();
console.log(arr === cloneArr); // false

// Array like object to array

function toArray() {
  return Array.prototype.slice.call(arguments);
}

const argArray = toArray(1,2,3,4,'test');

console.log(argArray); // [1, 2, 3, 4, "test"]
console.log(argArray.__proto__.constructor); // true
