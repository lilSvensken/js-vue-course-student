const moreFunction = (number) => {
    // Начало
    return function (numbers) {
        let newArr = [];
        for (let i = 0; i < numbers.length; i++) {
            newArr[i] = numbers[i] / number;
        }
        return newArr;
    }
    // Конец
};

export default moreFunction;