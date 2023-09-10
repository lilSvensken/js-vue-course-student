const sumSquareDifference = (num) => {
    let sum1 = 0, sum2 = 0;
    while(num !== 0){
        sum1 += num*num;
        sum2 += num;
        num -= 1;
    }
    return sum2 * sum2 - sum1;
};
export default sumSquareDifference;