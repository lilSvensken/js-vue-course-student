const reorderDigits = (type, ...numbers) => {
    // Начало
    if (type === "asc") {
        return numbers.sort((a, b) => {
            return a - b;
        })
    } else if (type === "desc") {
        return numbers.sort((a, b) => {
            return b - a;
        })
    }
    // Конец
};

export default reorderDigits;