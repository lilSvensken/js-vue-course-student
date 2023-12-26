const isTicketHappy = (numStr) => {
	const length = numStr.length;
	const firstNum = numStr
		.slice(0, length / 2)
		.split('')
		.reduce((a, b) => Number(a) + Number(b), 0);

	const lastNum = numStr
		.slice(length / 2, length)
		.split('')
		.reduce((a, b) => Number(a) + Number(b), 0);

	return firstNum === lastNum;
};


export default isTicketHappy;
