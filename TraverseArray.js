const arr = [5, 1, 3, 7, 8, 9, 2];

// ! Traverse Array Elements

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// ! Traverse Array Elements and Sum

// var sum = 0;
// for(var i = 0; i< arr.length; i++){
//    sum += arr[i];
// }

// console.log("Total number sum = " + sum)

// var average = sum / arr.length;
// console.log(typeof average)
// console.log("Total average = " + average)

// ! Find largest number This given array

// let largestNumber = arr[0];
// var index;
// for(var i = 1; i < arr.length; i++){
//     if(arr[i] > largestNumber){
//         largestNumber = arr[i];
//         index = i;
//     }
// }
// console.log("The Largest number is " + largestNumber + " and this number index is " + index);

// ! Find 1st, 2nd, 3rd largest number This given array

// let firstNumber = arr[0];
// var firstIndex;
// for(var i = 1; i < arr.length; i++){
//     if(arr[i] > firstNumber){
//         firstNumber = arr[i];
//         firstIndex = i;
//     }
// }

// arr[firstIndex] = null;

// var secondIndex;

// var secondNumber = arr[0];
// for(var i = 1; i < arr.length; i++){
//     if(arr[i] > secondNumber){
//         secondNumber = arr[i];
//         secondIndex = i
//     }
// }

// console.log("The first Largest number is " + firstNumber + " and this number index is " + firstIndex);
// console.log("The second Largest number is " + secondNumber + " and this number index is " + secondIndex);
// console.log(arr)

//  ? or

console.log("Given array = [" + arr  + "]");

let firstNumber = arr[0];
var firstIndex;
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > firstNumber) {
    firstNumber = arr[i];
    firstIndex = i;
  }
}

arr[firstIndex] = arr[0];
arr[0] = firstNumber;

var secondNumber = arr[1];
var secondIndex = 1;

for (var i = 2; i < arr.length; i++) {
  if (arr[i] > secondNumber) {
    secondNumber = arr[i];
    secondIndex = i;
  }
}

arr[secondIndex] = arr[1];
arr[1] = secondNumber;

var thirdNumber = arr[2];
var thirdIndex = 2;

for (var i = 2; i < arr.length; i++) {
  if (arr[i] > thirdNumber) {
    thirdNumber = arr[i];
    thirdIndex = i;
  }
}

arr[thirdIndex] = arr[2];
arr[2] = thirdNumber;

console.log(
  "The first largest number is " +
    firstNumber +
    " and this number index number is " +
    firstIndex
);
console.log(
  "The second largest number is " +
    secondNumber +
    " and this number index number is " +
    secondIndex
);
console.log(
  "The third largest number is " +
    thirdNumber +
    " and this number index number is " +
    thirdIndex
);

// ! Find smallest number This given array

// let smallestNumber = arr[0];

// for(var i = 1; i < arr.length; i++){
//     if(arr[i] < smallestNumber){
//         smallestNumber = arr[i];
//     }
// }

// console.log("The Smallest number is " + smallestNumber);
