const check = 42;
const transformFortyTwo = (numbers) => {
    // Начало
    return numbers.map(function(element) {
        // Проверяем, является ли элемент кратным 42
        if (element % 42 === 0) {
            return 'forty two!';
        } else {
            return element;
        }
    });
    // Конец
};

export default transformFortyTwo;