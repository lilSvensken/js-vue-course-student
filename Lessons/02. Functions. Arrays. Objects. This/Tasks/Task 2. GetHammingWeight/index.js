const getHammingWeight = (num) => {
    // Начало
    let sum = 0;
    while(num !== 0 ) {
        sum += num % 2;
        num =  parseInt(num / 2);
    }
    return sum
    // Конец
};

console.log(getHammingWeight(4))
