const sumSquareDifference = (num) => {
    let sumSquare =  0
    let squareSum = 0
    for (let i = 0; i <= num; i++){
        sumSquare += i ** 2
        squareSum += i
    }
    squareSum **= 2
    return squareSum - sumSquare
};

export default sumSquareDifference;