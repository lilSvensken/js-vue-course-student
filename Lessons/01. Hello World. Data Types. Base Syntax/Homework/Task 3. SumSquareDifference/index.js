const sumSquareDifference = (num) => {
    let sumSquare = 0;
    for (let i = 0; i <= num; i++)
    {
        sumSquare += i**2;
    }
    let squareSum = 0;
    for (let i = 0; i <= num; i++)
    {
        squareSum += i;
    }
    squareSum *= squareSum;
    return (squareSum - sumSquare);
};

export default sumSquareDifference;