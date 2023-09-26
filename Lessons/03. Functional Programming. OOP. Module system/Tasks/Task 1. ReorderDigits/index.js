const reorderDigits = (type, ...numbers) => {
    // Начало
    
    return numbers.sort((a,b) => type === 'asc' ? a-b : b-a);
    // Конец
};

//export default reorderDigits;

console.log(reorderDigits('asc',4,7,1));
console.log(reorderDigits('desc',4,7,1,5,3));