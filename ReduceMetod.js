/**
 *@ Understand the concept of Reduce Method
 */

/**
Array.prototype.reduce()
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
*/

// Reduce Method -> Make smaller or less in amount, degree, or size.

// Reduce Method -> Reduce work at end result and new element.

/**
Reduce method syntax

reduce(callbackFn)
reduce(callbackFn, initialValue)

arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
arr.reduce(callback( accumulator, currentValue[, index[, array]] ))

// ! Parameters

callbackFn --> A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

accumulator ==> The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

currentValue ==> The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

currentIndex ==> The index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

array ==> The array reduce() was called upon.

initialValue (Optional) ==> A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.

Return value --> The value that results from running the "reducer" callback function to completion over the entire array.



*/

let number = [1, 2, 3, 4, 5];

function sumFunc(accumulator, currentValue) {
  return accumulator + currentValue;
}

const sum = number.reduce(sumFunc);

console.log(sum);

// implement Average

const avg = number.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
});

console.log(avg);