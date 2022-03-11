module.exports = function monthOfDate(dateString){
    // return month for date
    if (dateString){
        
        // Splitting the date components
        let dateSplit = dateString.split('/');
        let dd = Number(dateSplit[0]);
        let mm = Number(dateSplit[1]);
        let yy = dateSplit[2];

        //check if its a valid date and return month
        if(!isNaN(Date.parse(yy.toString()+'-'+mm.toString()+'-'+dd.toString()))) return mm;
        
     }

    // return undefined for undefined, null, empty string or invalid date
    return 0;
}