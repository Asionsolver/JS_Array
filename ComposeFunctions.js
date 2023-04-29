/**
* @title Compose Functions
*/

// Understand Compose Functions

const add = (n) => n + 10;
const multiply = (n) => n * 3;
const divide = (n) => n / 10;


const n = 5;
const result = add(multiply(divide(n)));
console.log(result); 

/*

Explanation:

divide(5) returns 0.5 --> multiply(0.5) returns 1.5 --> add(1.5) returns 11.5

*/

const result1 = divide(multiply(add(n)));
console.log(result1);

/*

Explanation:

add(5) returns 15 --> multiply(15) returns 45 --> divide(45) returns 4.5

*/

// Compose Functions using Reduce Method --  short way

const pipe = (...fns) => (x) => fns.reduce((value, functions) => functions(value), n);

console.log(pipe(add, multiply, divide)(5)); // Output: 4.5

// Compose Functions using Reduce Method -- long way

const compose = (...fns) => {
    return (x) => {
        return fns.reduce((acc, curr) => {
            return curr(acc);
        }, x);
    };
} 

console.log(compose(add, multiply, divide)(5)); // Output: 4.5