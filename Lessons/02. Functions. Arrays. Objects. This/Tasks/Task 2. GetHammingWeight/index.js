const getHammingWeight = (num) => {
    let counter = 0;
    // Начало
    while (num !== 0) {
        if (num % 2 === 1) {
            counter += 1;
        }
        num /= 2;
    }
    return counter;
    // Конец
};

export default getHammingWeight;