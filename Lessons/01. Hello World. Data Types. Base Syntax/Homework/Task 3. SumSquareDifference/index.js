const sumSquareDifference = (num) => {
    // Начало
    let sum = 0;
    let qv = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + Math.pow(i, 2);
        qv = qv + i;
    };
    return Math.pow(qv,2) - sum;

    // Конец
};

export default sumSquareDifference;