const moreFunction = (number) => {
    // Начало
    return function(array) {
        return array.map(function(element) {
            return element / number;
        });
    }
    // Конец
};

export default moreFunction;