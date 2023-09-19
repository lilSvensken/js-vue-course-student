const sumSquareDifference = (num) => {
    // Начало
    let sumOfSquares = 0;
    let squareOfSums = 0;
    for (let i= 1; i <= num; i++) {
        sumOfSquares += i * i;
        squareOfSums += i;
    }
    return squareOfSums * squareOfSums - sumOfSquares;
    // Конец
};

export default sumSquareDifference;