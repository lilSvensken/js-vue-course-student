const sumSquareDifference = (num) => {
    let sum = 0;
    let square = 0;
    for (let i = 1; i <= num; i++) {
        sum += i*i;
        square += i;
    }
    return square*square - sum;
};

export default sumSquareDifference;