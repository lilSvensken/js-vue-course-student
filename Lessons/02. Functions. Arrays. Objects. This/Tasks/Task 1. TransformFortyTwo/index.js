const transformFortyTwo = (numbers) => {
    // Начало
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 42 === 0) {
            numbers[i] = 'forty two!';
        }
    }
    return numbers
    // Конец
};
console.log(transformFortyTwo([ 1, 2, 7 ]))
console.log(transformFortyTwo([ 12, 42, 25 ]))
console.log(transformFortyTwo([ 424, 4235, 882, 32 ]))
console.log(transformFortyTwo([]))
