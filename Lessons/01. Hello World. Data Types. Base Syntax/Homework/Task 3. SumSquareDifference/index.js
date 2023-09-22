const sumSquareDifference = (num) => {
    // Начало
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    const squareOfSum = sum * sum;
    let sumOfSquares = 0;
    for (let i = 1; i <= num; i++) {
        sumOfSquares += i * i;
    }

    const difference = squareOfSum - sumOfSquares;

    return difference;

    // Конец
};

export default sumSquareDifference;