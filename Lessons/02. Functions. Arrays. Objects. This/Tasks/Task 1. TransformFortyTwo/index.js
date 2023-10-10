<<<<<<< HEAD
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
=======
const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
	return arr.map(item => {
		return (item % CHECK_NUM) ? item : 'forty two!';
	})
};

export default transformFortyTwo;
>>>>>>> 0cc445e2c23a9942e877bb69b032102dabb177ae
