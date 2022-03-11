module.exports = function stringToNumber(stringOfNum){

    if (stringOfNum){

        // Omitting $ and , from the string
        let stringOfNumWithout$ = stringOfNum.replace('$','');
        let stringOfNumOnly = stringOfNumWithout$.replaceAll(',','');

        // Converting a string of negative number into a number
        if (stringOfNumOnly[0] === '-'){
            let numValue = Number(stringOfNumOnly.slice(1));
            if (isNaN(numValue)) return 0;
            return -numValue;
        }

        // Converting a string of positive number into number 
        else{
            let numValue = Number(stringOfNumOnly.slice(0));
            if (isNaN(numValue)) return 0;
            return numValue;
        }
    }
    // Returning undefined if string is null,empty or undefined
    return 0;
}
