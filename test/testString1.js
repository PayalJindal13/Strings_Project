let stringToNum = require('../string1.js');
console.log(stringToNum('$200'));           //expects output 200
console.log(stringToNum('$340.99'));       // expects output 340.99
console.log(stringToNum('$5,640'));       // expects output 5640
console.log(stringToNum('-$567'));       // expects output 567
console.log(stringToNum('-$120.45'));   // expects output -120.45
console.log(stringToNum('-$1,200.85')); // expects output -1200.85
console.log(stringToNum('$120y89'));    // expects output 0 dur to invalid number
console.log(stringToNum('$10,,,,00'));   // expects output 0
console.log(stringToNum(undefined));    // expects output 0
console.log(stringToNum(null));         // expects output 0

