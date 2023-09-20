<<<<<<< HEAD
const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
	return arr.map(item => {
		return (item % CHECK_NUM) ? item : 'forty two!';
	})
};

export default transformFortyTwo;
=======
const transformFortyTwo = (numbers) => {
    return numbers.map((num) => {
        if (num % 42 == 0) num = 'forty two!'
        return num
    })
};


export default transformFortyTwo;
>>>>>>> 8042429 (homework)
