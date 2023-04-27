const arr = [1, 2, 3, 4, 5];

// const map = arr.map((item) => {
//   return item * 2;
// });

// const map = arr.map((item) => [item * 2]);

// const map = arr.map((item) => [item * 2]).flat();
// const map = arr.flatMap((item) => [item * 2]);
// const map = arr.flatMap((item) => [item, item * 2]);
// console.log(map);

// We can do the same thing with reduce method

// const reduceFlatMap = arr.reduce((accumulator, currentValue) => {
//    accumulator.push([currentValue * 2]);
//    return accumulator;
// }, []);

const reduceFlatMap = arr.reduce((accumulator, currentValue) => {
  return accumulator.concat([currentValue * 2]);
}, []);

// const reduceFlatMap = arr.reduce((accumulator, currentValue) => {
//   return accumulator.concat([currentValue, currentValue * 2]);
// }, []);

console.log(reduceFlatMap);
