/**
* @ Array Push and Pop Method 
*/

const Stack = require('./Stack');

// Stack uses Text Reverse

const stack = new Stack();

const text = 'Hello World';

for (let i = 0; i < text.length; i++) {
    stack.push(text.charAt(i));
}

let reverseText = '';

while (!stack.isEmpty()) {
    // console.log(stack);
    reverseText += stack.pop();
}

// console.log(reverseText);
// console.log(stack);

// Javascript Array Stack Methods

const text1 = 'Hello World, Noob';

const jsStack1 = [];

for (let i = 0; i < text1.length; i++) {
    jsStack1.push(text1.charAt(i));
}

console.log(jsStack1);

let reverseText1 = '';

while (jsStack1.length ) reverseText1 += jsStack1.pop();

console.log(reverseText1);


