/**
* @Title: AnatomyReduceMethod
*/

// PreviousValue or Accumulator -> is the value that is returned from the previous iteration.
// PreviousValue or Accumulator -> gather together or acquire an increasing number or quantity of

let number = [1, 2, 3, 4, 5];

function sumFunc(accumulator, currentValue, index) {
    console.log(`index: ${index} accumulator: ${accumulator} currentValue: ${currentValue}`);
    return accumulator + currentValue;
  }

const sum = number.reduce(sumFunc, 0);
// const sum = number.reduce(sumFunc);
console.log(sum);