/**
* @Reduce Right Method
*/

const arr = [[1, 2], [3, 4], 5, [6, 7]];

const reduceRight = arr.reduceRight((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
} , []);

console.log(reduceRight);


// ! Explain of own reduceRight method

const sum  = reduceRight.reduceRight((accumulator, currentValue,index) => {
    console.log(`accumulator: ${accumulator} currentValue: ${currentValue} index: ${index}`);
    return accumulator + currentValue;
},0);

console.log(sum);

