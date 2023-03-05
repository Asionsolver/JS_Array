/**
 * @ForEach Implementation
 */

let names = ["John", "Jane", "Mary", "Mark", "Bob"];

// ! Code Duplication

// For Loop
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (let i = 0; i < names.length; i++) {
//   console.log(`For Loop: ${names[i]}`);
// }

// ? Iterating Logic -> Business Logic

// * Iterating Logic
// function reuse(arr, logic) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log('Reuse -',arr[i]); // Problematic Code
//     logic(i, arr[i], arr);
//   }
// }

// * Business Logic

// function logic(index, value, arr) {
//   console.log(
//     "Array Index - ",
//     index,
//     "Array Value - ",
//     value,
//     "Main Array - ",
//     arr
//   );
// }

// function logic2(value) {
//   console.log("Array Value - ", value);
// }

// reuse(["John", "Jane"], logic);
// reuse([1, 2], logic2);

// ? My ForEach Implementation

function myForeach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

const num = [1, 2, 3, 4, 5];
let sum = 0;

// function sumFunc( value) {
//   sum += value;
// }

// myForeach(num, sumFunc);
// myForeach(num, function (value) {
//   sum += value;

// });



// console.log(sum);

// myForeach(names, function (value, index) {
//   console.log(index, ": ", value);
// });

names.forEach(function (value, index) {
  console.log(index, ": ", value);
});
