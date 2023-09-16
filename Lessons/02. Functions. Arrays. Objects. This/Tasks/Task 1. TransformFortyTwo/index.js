const transformFortyTwo = (numbers) => {
    // Начало
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 42 === 0) {
            newArr[i] = "forty two!";
        } else {
            newArr[i] = numbers[i];
        }
    }
    return newArr;
    // Конец
};

export default transformFortyTwo;