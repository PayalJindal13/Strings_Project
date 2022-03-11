module.exports = function IPAddressToArray(ipv4Address){
    if (ipv4Address){
        //Splitting array by dot
        let ipv4Array = ipv4Address.split('.');

        // Returning array for valid ipv4 address
        if (ipv4Array.length === 4){
            // checking range of address from 0-255 
            if (ipv4Array.every(element => {return (Number(element) <= 255 && Number(element) >=0)})){
                let finalArray = ipv4Array.map(num => {return Number(num)});
                return finalArray;
            }
        }   
    }
    //Returning Empty string for invalid address
    return '';
}
