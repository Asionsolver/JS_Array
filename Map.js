/**
 * @Map method
 */

// let names = ["John Doe", "Jane Parker", "Mark Wood", "Mary Jane"];

// We have reuse function

// function reuse(arr, logic) {
//   for (let i = 0; i < arr.length; i++) {
//     logic(arr[i],i,  arr);
//   }
// }

// Map Implementation

// function reuseAndMap(arr, logic) {
//     let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(logic(arr[i],i,  arr));
//   }
//     return newArr;
// }

// ! Extract Length of Each Name and Store in an Array -> [ 8, 10, 8, 9 ]
// const nameLength = [];

// reuse(names, (value)=>{
//     nameLength.push(value.length);
// })

// console.log(nameLength);

// Using reuseAndMap Function

// const lengthOfNames = reuseAndMap(names, (value)=>value.length);
// console.log(lengthOfNames);

//Official Map Function
// console.log(names.map((value)=>value.length));

// ! Get UpperCase of Each Name and Store in an Array -> [ "JOHN DOE", "JANE PARKER", "MARK WOOD", "MARY JANE" ]

// const upperCaseNames = [];

// reuse(names, (value)=>{
//     upperCaseNames.push(value.toUpperCase());
// })

// console.log(upperCaseNames);

// Using reuseAndMap Function

// const upperCaseNames = reuseAndMap(names, (value)=>value.toUpperCase());
// console.log(upperCaseNames);

//Official Map Function
// console.log(names.map((value)=>value.toUpperCase()));

// ! Get LowerCase of Each Name and Store in an Array -> [ "john doe", "jane parker", "mark wood", "mary jane" ]

// const lowerCaseNames = [];

// reuse(names, (value)=>{
//     lowerCaseNames.push(value.toLowerCase());
// })

// console.log(lowerCaseNames);

// Using reuseAndMap Function

// const lowerCaseNames = reuseAndMap(names, (value)=>value.toLowerCase());
// console.log(lowerCaseNames);

//Official Map Function
// console.log(names.map((value)=>value.toLowerCase()));

// ! Get Slice of Each Name and Store in an Array -> [ "John", "Jane", "Mark", "Mary" ]

// const sliceNames = [];

// reuse(names, (value)=>{
//     sliceNames.push(value.slice(0,4));
// })

// reuse(names, (value)=>{
//     sliceNames.push(value.substr(4));
// })

// console.log(sliceNames);

// Using reuseAndMap Function

// const sliceNames = reuseAndMap(names, (value)=>value.substr(5));
// console.log(sliceNames);

//Official Map Function

// console.log(names.map((value)=>value.substr(5)));

// Real World Example of Map Function

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    email: "johndoe@gmail.com",
    number: 0170123456,
    gpa: 3.4,
  },
  {
    id: 2,
    name: "Jane Parker",
    age: 30,
    email: "janeparker@gmail.com",
    number: 017241143,
    gpa: 3.6,
  },
  {
    id: 3,
    name: "Mark Wood",
    age: 35,
    email: "markwood@gmail.com",
    number: 1234567890,
    gpa: 3.95,
  },
  {
    id: 4,
    name: "Mary Jane",
    age: 40,
    email: "maryjane@gmail.com",
    number: 0131030264,
    gpa: 3.54,
  },
];

const mappedUsers = users.map((value) => {
  return {
    ...value,
    title: `Hello ${value.name} - Your result is published`,
    msg: `Hello ${value.name} - Your GPA is ${
      value.gpa
    }. ${value.gpa >= 3.5 ? "Congratulation" : "Oh no"}! you have ${
      value.gpa >= 3.5 ? "passed" : "failed"
    } this semester.`,
  };
});

console.log(mappedUsers);

// ! Suppose tis people have participate for their fourth semester and we want to sent them email about their result
// ! but first we have to get their email of everyone + name
// ! for sending greeting via email
