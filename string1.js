module.exports = function stringToNumber(stringOfNum){

    if (stringOfNum){

        // Omitting $ from the string
        let str = stringOfNum.replace('$','');
        let stringOfNumOnly = '';
        let numValue;

        // Without decimals numbers
        if (str.indexOf('.') < 0){
            if(str[0] !== '-') stringOfNumOnly = stringNumPostive(str);
            if(str[0] === '-') stringOfNumOnly = stringNumNegative(str);
            numValue = Number(stringOfNumOnly);
            if (isNaN(numValue)) return 0;
            return numValue;
        }

        // With decimal numbers
        else if (str.indexOf('.') > 0){
            let str1 = str.substring(0,str.indexOf('.'));
            if(str1[0] !== '-') str1 = stringNumPostive(str1);
            if(str1[0] === '-') str1 = stringNumNegative(str1);
            let str2 = str.substring(str.indexOf('.')+1);
            numAfterDecimal = Number(str2);
            if(isNaN(numAfterDecimal)) return 0;
            stringOfNumOnly = str1 + '.' + str2;
            numValue = Number(stringOfNumOnly);
            if (isNaN(numValue)) return 0;
            return numValue;
        }
    }
    // Returning undefined if string is null,empty or undefined
    return 0;
}


function stringNumPostive(str){
    let stringOfNumOnly;
    if (str.length > 4){
        for (let i = 1; i <= str.length -4; i += 4){
            if(str[i] === ','){
                stringOfNumOnly = str.substring(0,i) + str.substring(i+1);
            }
        }
    }
    else{
        stringOfNumOnly = str;
    }
    return stringOfNumOnly;
}

function stringNumNegative(str){
    let stringOfNumOnly = str;
    if (str.length > 5){
        for (let i = 2; i <= str.length -4; i += 4){
            if(str[i] === ','){
                stringOfNumOnly = str.substring(0,i) + str.substring(i+1);
            }
        }
    }
    else{
        stringOfNumOnly = str;
    }
    return stringOfNumOnly;
}