let addressToArray = require('../string2.js');

// Testcases
console.log(addressToArray('192.89.45.12'));    // expects output [192, 89, 45, 12]
console.log(addressToArray('355.23.67.100'));   // expects empty array as invalid address is given
console.log(addressToArray('123.234.56.78.80')); // expects empty array as invalid address is given
console.log(addressToArray());                   // expects empty array
console.log(addressToArray(''));                 // expects empty array
console.log(addressToArray(null));                // expects empty array
console.log(addressToArray(undefined));             // expects empty array

