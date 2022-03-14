module.exports = function monthOfDate(dateString){
    // return month for date
    if (dateString){
        
       // Splitting the date components
        let dateSplit = dateString.split('/');
        let mm = Number(dateSplit[0]);
        let dd = Number(dateSplit[1]);
        let yy = dateSplit[2];
        date = yy.toString()+'-'+mm.toString()+'-'+dd.toString();
        
        //check if its a valid date and return month
        if((new Date(date) !== "Invalid Date") && !isNaN(new Date(date))){
            return mm;
        }
        
     }

    // return undefined for undefined, null, empty string or invalid date
    return 0;
}