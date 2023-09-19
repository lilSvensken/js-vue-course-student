const reorderDigits = (type, ...numbers) => {
    // Начало
    let arr = [ ...numbers];
    if (type = 'asc') {
        return arr.sort((a, b) => {
            return a - b;
        });
    }
    if (type = 'desc') {
        return arr.sort((a, b) => {
            return b - a;
        });
    }

    // Конец
};

export default reorderDigits;