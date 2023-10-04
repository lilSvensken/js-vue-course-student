const sumSquareDifference = (num) => {
    // Начало
    let sumSq = 0;
    let sqSum = 0;
    for (let i = 1; i <= num; i++) {
        sumSq += i**2
        sqSum += i
    }
    return sqSum**2 - sumSq
    // Конец
};
export default sumSquareDifference;