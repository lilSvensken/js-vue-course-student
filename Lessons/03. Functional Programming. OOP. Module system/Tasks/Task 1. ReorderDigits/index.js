const reorderDigits = (type, ...numbers) => {
    if(type === 'asc'){
        numbers.sort((a, b) =>{
            return a - b;
        })
    }
    else if(type === 'desc'){
        numbers.sort((a, b) =>{
            return b - a;
        })
    }
    return numbers;
};
export default reorderDigits;