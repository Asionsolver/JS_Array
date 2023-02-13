// ! Add New Elements in Array

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 =[10,11,12,13,14,15];

// arr1.length = 6; // not recommended
// arr1.push(6);
// console.log(arr1);

// arr1.push(7, 8, 9);
// console.log(arr1);

// arr1.push(arr2);
// console.log(arr1);

// Old way to add new elements in array

// arr1.push.apply(arr1, arr2);
// console.log(arr1);

// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);


// This method name is spread operator. It is used to add new elements in array. This method is ES6 feature.
// arr1.push(...arr2);
// console.log(arr1);

// Use unshift to insert at the beginning
// const arr3 = [5,6,7];
// const arr4 =[1,2,3]

// arr3.unshift(4)
// console.log(arr3)
// Modern Way
// arr3.unshift(...arr4)

// Old way
// Array.prototype.unshift.apply(arr3, arr4)
// console.log(arr3)

// Use splice to insert at the given index
//this method work mutable way

const arr5 = [1,3,8]
const arr6 =[4,5,6,7]
arr5.splice(1,0,2);
console.log(arr5)
// arr5.splice(3,0,4,5);
// arr5.splice(3,0,arr6) // nested array
arr5.splice(3,0,...arr6) // single array
console.log(arr5)