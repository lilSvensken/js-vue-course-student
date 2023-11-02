const getBoomerangsCount = (numbers) => {
    // Начало
    let count = 0;
    for (let i = 1; i < numbers.length - 1; i++) {
        if(numbers[i-1] === numbers[i+1] && numbers[i-1] !== numbers[i]) {
            count += 1;
        }
    }
    return count;
    // Конец
};

export default getBoomerangsCount;