const sumSquareDifference = (num) => {
    let sumSq = 0
    let sqSum = 0
    for(let i = 1; i <= num; i++){
        sumSq += i * i
        sqSum += i
    }
    return sqSum * sqSum - sumSq
};

export default sumSquareDifference;