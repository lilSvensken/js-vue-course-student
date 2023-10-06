const sumSquareDifference = (num) => {
    // Начало
<<<<<<< HEAD
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
=======
    let res = squareSum(num) - sumSquare(num);
    return res;
>>>>>>> e3a22bd2a6535a38e74a74a326de368ead0a142c
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