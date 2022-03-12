let monthFromDate = require('../string3.js');

//Testcases
console.log(monthFromDate('10/11/2021'));  //expects output 11
console.log(monthFromDate('13/12/2021'));  //expects output 0 as invalid date
console.log(monthFromDate());              //expects output 0
console.log(monthFromDate(undefined));     //expects output 0
console.log(monthFromDate(null));          //expects output 0
