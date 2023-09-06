const SumSquareDifference = (num) => {
    // Начало
    let summofsquares = 0;
    let squareofsumm = 0;
    for (var i = 1; i < num + 1; i++){
        summofsquares += i ** 2;
        squareofsumm += i;
    }
    return (squareofsumm ** 2 - summofsquares);
    // Конец
};

export default SumSquareDifference;