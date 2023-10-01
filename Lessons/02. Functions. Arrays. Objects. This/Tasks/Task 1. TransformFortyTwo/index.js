
const transformFortyTwo = (arr) => {
	return arr.map(item => {
		return (item % 42) ? item : 'forty two!';
	})
};

export default transformFortyTwo;
