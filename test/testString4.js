let titleCasedName = require('../string4.js');
let nameObject = {'first_name' : 'Payal', 'middle_name' : 'Jindal' , 'last_name' : 'Gupta'};
let nameObject1 = {'first_name' : 'Payal', 'last_name' : 'Gupta'};
// Testcases
console.log(titleCasedName(nameObject)); // expects output Payal Jindal Gupta
console.log(titleCasedName(nameObject1)); // expects output Payal Gupta
console.log(titleCasedName({})); // expects empty string as ouput
console.log(titleCasedName()); // expects empty string as output
console.log(titleCasedName(null)); // expects empty string as ouput
console.log(titleCasedName(undefined)); // expects empty string as ouput



