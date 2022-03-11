let stringToNum = require('../string1.js');
console.log(stringToNum('$340'));       // expects output 340
console.log(stringToNum('-$120.45'));   // expects output -120.45
console.log(stringToNum('$120y89'));    // expects output 0 dur to invalid number
console.log(stringToNum());             // expects output 0
console.log(stringToNum(undefined));    // expects output 0
console.log(stringToNum(null));         // expects output 0

