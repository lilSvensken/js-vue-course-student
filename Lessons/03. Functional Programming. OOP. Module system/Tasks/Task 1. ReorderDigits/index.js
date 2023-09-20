const reorderDigits = (type, ...numbers) => {
<<<<<<< HEAD
	return numbers.sort((a, b) => type === 'asc' ? a - b : b - a);
=======
    if (type == 'asc'){
        return numbers.sort((a, b) => a-b)
    }else if (type == 'desc'){
        return numbers.sort((a, b) => b-a)
    }
>>>>>>> 8042429 (homework)
};

export default reorderDigits;
