let titleCasedName = require('../string4.js');
let nameObject = {'first_name' : 'Payal', 'middle_name' : 'Jindal' , 'last_name' : 'Gupta'};
// Testcases
console.log(titleCasedName(nameObject)); // expects output Payal Jindal Gupta
console.log(titleCasedName({'first_name': 'Payal', 'last_name' : 'Gupta'})); //expects output Payal Gupta
console.log(titleCasedName({'first_name': 'Payal', 'middle_name' : 'Jindal'})); //expects output Payal Jindal
console.log(titleCasedName({'first_name' : 'Gupta'})); //expects output Payal
console.log(titleCasedName({'middle_name' : 'Jindal'})); //expects output Jindal
console.log(titleCasedName({'last_name' : 'Gupta'})); //expects output Gupta
console.log(titleCasedName({})); // expects empty string as ouput
console.log(titleCasedName()); // expects empty string as output
console.log(titleCasedName(null)); // expects empty string as ouput
console.log(titleCasedName(undefined)); // expects empty string as ouput



