const roundAndRootNumber = (num) => {
    let result = "";
    if(num >= 0){
        result = Math.floor(Math.sqrt(num)*100)/100 + "";
    }
    else{
        result = "error";
    }
    return result;
};
export default roundAndRootNumber;