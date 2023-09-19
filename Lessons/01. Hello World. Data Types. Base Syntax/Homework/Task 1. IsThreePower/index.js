const isThreePower = (num) => {
    if(num < 1){
        return false;
    }
    while(num > 1){
        if(num % 3 === 0){
            num /= 3;
        }else{

            return false;
        }
    }
    return true;
};

export default isThreePower;