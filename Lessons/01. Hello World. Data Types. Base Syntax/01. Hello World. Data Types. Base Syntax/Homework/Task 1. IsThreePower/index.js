const isThreePower = (num) => {
    // Начало
    while (num >= 3) {
        num /= 3;
    }
    if (num === 1) {
        return true;
    } else {
        return false
    }
    // Конец
};

export default isThreePower;