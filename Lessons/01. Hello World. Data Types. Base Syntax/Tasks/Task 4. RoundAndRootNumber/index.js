// степень округления числа
const ROUNDING_DEGREE = 100;

const roundAndRootNumber = (num) => {
	return num < 0 ?
		'error' :
		String(Math.floor(Math.sqrt(num) * ROUNDING_DEGREE) / ROUNDING_DEGREE);
};

export default roundAndRootNumber;
