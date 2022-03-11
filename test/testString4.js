let titleCasedName = require('../string4.js');
let nameObject = {'first_name' : 'Payal', 'middle_name' : 'Jindal' , 'last_name' : 'Gupta'};

//Expect title cased name for valid name object, undefined otherwise
console.log(titleCasedName(nameObject));
