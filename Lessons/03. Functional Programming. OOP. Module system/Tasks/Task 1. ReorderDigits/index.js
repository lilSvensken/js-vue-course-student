const reorderDigits = (type, ...numbers) => {
	return numbers.sort((a, b) => type === 'asc' ? a - b : b - a);
};

export default reorderDigits;
