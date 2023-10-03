const sumSquareDifference = (num) => {
    // Начало
    let res = squareSum(num) - sumSquare(num);
    return res;
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