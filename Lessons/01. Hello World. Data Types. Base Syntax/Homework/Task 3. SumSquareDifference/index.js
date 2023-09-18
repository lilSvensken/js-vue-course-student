const sumSquareDifference = (num) => {
    // Начало
    let sum_cu = 0;
    let sum_fn = 0;
    for (let i = 1; i <= num; i++) {
        sum_cu += Math.pow(i, 2);
        sum_fn += i;
    }
    sum_fn = sum_fn * sum_fn;
    return sum_fn - sum_cu;
    // Конец
};

export default sumSquareDifference;