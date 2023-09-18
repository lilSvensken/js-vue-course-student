const sumSquareDifference = (num) => {
    let sumOfSquares = 0;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sumOfSquares += i * i;
        sum += i;
    }

    let squareOfSum = sum * sum;

    return squareOfSum - sumOfSquares;
};

//export default sumSquareDifference;