const reorderDigits = (type, ...numbers) => {
    if (type === 'asc'){
        numbers.sort((a, b) => a - b)
    }
    else if (type === 'desc'){
        numbers.sort((a, b) => b - a)
    }
};

export default reorderDigits;
