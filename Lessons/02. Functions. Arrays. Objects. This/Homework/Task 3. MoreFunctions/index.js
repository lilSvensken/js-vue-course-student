const moreFunction = (number) => {
    // Начало
    return function (numbersArray) {
        return numbersArray.map(function (num) {
            return num / number;
        });
    }
    // Конец
};

export default moreFunction;