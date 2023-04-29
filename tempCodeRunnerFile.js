console.time('Both')
bigArray.filter(num => num % 2 === 0).map(num => num * num);
console.timeEnd('Both'); 