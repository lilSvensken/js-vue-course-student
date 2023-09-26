const transformFortyTwo = (numbers) => {
    // Начало
    return numbers.map(num => {
        if (num % 42 === 0) {
            return "forty two!";
        } else return num;
    })
};
// Конец

export default transformFortyTwo;