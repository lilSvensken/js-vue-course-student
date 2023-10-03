const numb = 3;

const isThreePower = (num) => {
	let deg = 0

	while (numb**deg < num) {
		deg = deg + 1
	}
	return  (numb**deg) == num;
};

export default isThreePower;
