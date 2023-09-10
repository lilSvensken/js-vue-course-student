const isThreePower = (num) => {
    if (num > 0) {
        for (let i = 0; i <= Math.sqrt(num); i++) {
            if (Math.pow(3, i) === num) {
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
};
export default isThreePower;