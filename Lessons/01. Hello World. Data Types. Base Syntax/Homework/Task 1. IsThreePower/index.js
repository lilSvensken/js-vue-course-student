const isThreePower = (num) => {
    let i = 1;
    let flag = false;
    while (i<=num){
        if (i === num){
            flag = true;
            return flag;
        }
        i = i * 3;
    }
    return flag;
};

export default isThreePower;