/**
 * @title FrequencyChecker
 */

const votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla",
  "vue",
  "angular",
  "react",
  "vue",
  "vue",
  "vue",
];

const getFrequency = votes.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(getFrequency); 
