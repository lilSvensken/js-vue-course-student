const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
	return arr.map(item => {
		return (item % CHECK_NUM) ? item : 'forty two!';
	})
};

export default transformFortyTwo;
