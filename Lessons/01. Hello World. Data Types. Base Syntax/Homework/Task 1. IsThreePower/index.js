const isThreePower = (num) => {
    // Начало
    for (let i = 0; i <= Math.sqrt(num); i++) {
        if (Math.pow(3, i) === num) {
            return true;
        }
    }
    return false;
    // Конец
};

export default isThreePower;