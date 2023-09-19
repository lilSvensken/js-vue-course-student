const isThreePower = (num) => {
    while (num > 0) {
        if (num === 1) return true;
        else if (num % 3 !== 0) return false;
        num = num / 3;
    }
    return false;
};

export default isThreePower;