const sumSquareDifference = (num) => {
    // Начало
    let first = 0;
    let second = 0;
    for (let i = 1; i < num + 1; i++) {
        first += i ** 2;
        second += i;
    }

    return (second ** 2) - first;
    // Конец
};

export default sumSquareDifference;