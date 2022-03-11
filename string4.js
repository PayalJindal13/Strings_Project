module.exports = function titleCaseName(nameObj){

    // returning titledcase name for a defined name object
    if (nameObj){

        // first name in lowercase 
        let firstName = nameObj['first_name'].toLowerCase();

        //middle name in lowercase
        let middleName;
        if (nameObj['middle_name']) {middleName = nameObj['middle_name'].toLowerCase()};

        //last name in lowercase
        let lastName = nameObj['last_name'].toLowerCase();

        // converting each names in titlecase and combining into one string
        let titledName = firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ';
        if (middleName){ titledName += middleName.charAt(0).toUpperCase() + middleName.slice(1) + ' '}
        titledName += lastName.charAt(0).toUpperCase() + lastName.slice(1);
        return titledName;
    }
    //Returning undefined for a null,undefined or empty object
    return undefined;
}
