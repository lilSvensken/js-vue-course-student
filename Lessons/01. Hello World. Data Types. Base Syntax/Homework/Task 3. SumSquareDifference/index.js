const sumSquareDifference = (num) => {
   let sumSq = 0
    let sqSum = 0
    for (let i = 0; i <= num; i++) {
        sumSq += i**2
        sqSum += i
    }
    return  (sqSum**2) - sumSq

};

export default sumSquareDifference;