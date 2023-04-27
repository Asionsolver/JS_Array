/**
* @title Implementation of own reduce method 
*/
// ! Implementation of own reduce method simple way
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue, start = 0;
    if(!initialValue) {
        accumulator = array[0];
        start = 1;
    }
    for (let index = start; index < array.length; index++) {
        accumulator = callback(accumulator, array[index], index, array);    
    }
    return accumulator;
}

const arr = [1, 2, 3, 4, 5];

const reduce = myReduce(arr, (accumulator, currentValue) => {
    return accumulator + currentValue;
    });

console.log(reduce);


// ! Implementation of own reduce method another way
// function myReduce(array, callback, initialValue) {
//   let accumulator = initialValue;
//   for (let index = 0; index < array.length; index++) {
//     if (accumulator !== undefined) {
//       accumulator = callback(accumulator, array[index], index, array);
//     } else {
//       accumulator = array[index];
//     }
//   }
//   return accumulator;
// }

// const arr = [1, 2, 3, 4, 5];

// const reduce = myReduce(arr, (accumulator, currentValue) => {
//     return accumulator + currentValue;
//     });

console.log(reduce);