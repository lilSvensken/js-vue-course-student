const reorderDigits = (type, ...numbers) => {
    // Начало
    if(type === asc) {
        return numbers.sort((a, b) => type === 'asc' ? a - b : b - a);
    }
    // Конец
};

console.log(reorderDigits('asc', 10, 322, 100, 2414, 3);)