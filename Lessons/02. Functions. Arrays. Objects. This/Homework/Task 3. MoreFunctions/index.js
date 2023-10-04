const moreFunction = (number) => {
    // Начало
    return function (array) {
        return array.map(item => item/number)
    }
    // Конец
};

export default moreFunction;