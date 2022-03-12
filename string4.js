module.exports = function titleCaseName(nameObj){

    // returning titledcase name for a defined name object
    if (nameObj && Object.keys(nameObj).length){ // check if it is not null, undefined or empty object
        let titledName = '';
        // first name in lowercase 
        let firstName;
        if (nameObj['first_name']) {firstName = nameObj['first_name'].toLowerCase();
        titledName += firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ';
        }
        

        //middle name in lowercase
        let middleName;
        if (nameObj['middle_name']) {middleName = nameObj['middle_name'].toLowerCase();
        titledName += middleName.charAt(0).toUpperCase() + middleName.slice(1) + ' ';
        }

        //last name in lowercase
        let lastName;
        if (nameObj['last_name']) {lastName = nameObj['last_name'].toLowerCase();
        titledName += lastName.charAt(0).toUpperCase() + lastName.slice(1);
        }
        return titledName;
        }

    //Returning empty string for undefined, null cases and empty object input
    return '';
}
