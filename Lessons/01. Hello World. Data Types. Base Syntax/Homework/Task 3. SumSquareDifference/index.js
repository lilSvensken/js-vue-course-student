const sumSquareDifference = (num) => {
    // Начало
    let sum = 0;
    for (let i = 1; i <= num ; i++) {
        sum+= i;
    }
    const squareOfSum = Math.pow(sum, 2);

    let sumOfSquares =0;
    for (let i = 0; i < num; i++) {
        sumOfSquares = Math.pow(sumOfSquares + i, 2);
    }
    const difference = squareOfSum - sumOfSquares;
    return difference;

    // Конец
};

export default sumSquareDifference;