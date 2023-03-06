/**
 * @ Map Vs Filter
 */

/**
 * Map: returns an array of pieces of information from the original array. In the callback function, return the data you wish to be part of the new array.

Filter: returns a subset of the original array based on custom criteria. In your callback function, return a boolean value to determine whether or not each item will be included in the new array.
 */

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

//   const mappedUsers = users.filter((value) => value.gpa > 3.6).map((value) => {
//     return {
//      ...value,
//      title: "Result Published",
//      msg: `Hello ${value.name} - Your GPA is ${value.gpa}`,
//     };
//   });

//     console.log(mappedUsers);

var playersArr = [
  { name: "Jason", footedness: "left", position: "forward" },
  { name: "Blake", footedness: "right", position: "defense" },
  { name: "Philip", footedness: "right", position: "goalie" },
  { name: "Logan", footedness: "left", position: "defense" },
  { name: "Will", footedness: "right", position: "forward" },
];

// ! Let’s find all of the players in the array that are left-footed using the filter() method!

var leftFootArr = playersArr.filter(function(player){
    return player.footedness === 'left';
});
console.log(leftFootArr);



