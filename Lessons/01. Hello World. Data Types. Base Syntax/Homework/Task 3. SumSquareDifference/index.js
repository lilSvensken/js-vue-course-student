const sumSquareDifference = (num) => {
    // Начало
    let sumSquare = 0;
    let squareSum = 0;
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            sumSquare += i ** 2;
            squareSum += i;
        }
    }
    squareSum **= 2;
    return squareSum - sumSquare;
    // Конец
};

const sumSquare = (num) => {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i * i;
    }
    return res;
};

const squareSum = (num) => {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i;
    }
    return res * res;
};
export default sumSquareDifference;