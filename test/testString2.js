let addressToArray = require('../string2.js');
let ipAdd = '254.27.56.61';

// Expects array of components for valid address and empty array for null,undefined or invalid
console.log(addressToArray(ipAdd));

