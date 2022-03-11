let arrayString = require('../string5.js');
let array = ["the", "quick", "brown", "fox"];

// Testcases
console.log(arrayString(array)); // expects output "the quick brown fox."
console.log(arrayString());      // expects empty string
console.log(arrayString([]));    // expects empty string
console.log(arrayString(undefined)); // expects empty string 
console.log(arrayString(null));      // expects empty string
