const isThreePower = (num) => {
    if (num <= 0) {
        return false;
    } else {
        for (let i = 0; i <= Math.sqrt(num); i++) {
            return Math.pow(3, i) === num;
        }
    }
};
export default isThreePower;