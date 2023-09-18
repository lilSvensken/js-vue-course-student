const getBoomerangsCount = (numbers) => {
    // Начало
    let count = 0;
    for (let i = 2; i < numbers.length; i++){
        if(numbers[i-2] === numbers[i] && numbers[i-2] !== numbers[i-1]) count += 1;
    }
    return count;
    // Конец
};

export default getBoomerangsCount;