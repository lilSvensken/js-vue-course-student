const isThreePower = (num) => {
    if(num === 1){
        return true;
    }else{
        return num % 3 === 0;
    }
};

export default isThreePower;