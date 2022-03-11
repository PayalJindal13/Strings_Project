module.exports = function arrayToString(arr){

    // returning string from a valid array
    if(arr && arr.length) return arr.join(' ')+'.';

    // undefined, null case
    return '';
}
