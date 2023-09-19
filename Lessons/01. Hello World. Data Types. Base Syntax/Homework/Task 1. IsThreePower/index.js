const isThreePower = (num) => {
    for (let i = 0; i<=8; i++){
        if (3 ** i == num) return true
        else continue 
    }
    return false
};

export default isThreePower;