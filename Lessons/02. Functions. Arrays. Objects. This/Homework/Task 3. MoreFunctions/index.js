const moreFunction = (number) => {
    // Начало
    return function(numbersArray) {
        return numbersArray.map(function(num) {
            return num / number;
        });
    };
    // Конец
};

const newFunction = moreFunction(2);
const result = newFunction([10, 11, 12, 20]);
console.log(result);
export default moreFunction;