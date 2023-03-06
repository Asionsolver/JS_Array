/**
 * @Some Method
 */

/**
 * The some() method in JavaScript is a built-in function that tests whether at least one element in an array passes a test (i.e., returns true for a given callback function). The some() method returns true if at least one element in the array passes the test, and false otherwise. 
 */

// Example array
const myArray = [1, 9, 3, 7, 5];

// Define a function to test if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Use some() to check if at least one element is even
const hasEvenNumber = myArray.some(isEven);

// Print the result
console.log(hasEvenNumber);