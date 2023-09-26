const reorderDigits = (type, ...numbers) => {
    // Начало
       return numbers.sort((a, b) => type === "asc" ? a - b : b - a);
    // Конец
};

export default reorderDigits;