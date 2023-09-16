const getHammingWeight = (num) => {
    // Начало
    let cnt = 0;
    while (num >= 1) {
        cnt += num % 2;
        num = Math.floor(num / 2);
    }
    return cnt;
    // Конец
};

export default getHammingWeight;