const isThreePower = (num) => {
    // начало
    if (num < 1){
        return false;
    }
    while (num % 3 === 0){
        num /= 3
    }
    return num === 1
    //конец
};

export default isThreePower;