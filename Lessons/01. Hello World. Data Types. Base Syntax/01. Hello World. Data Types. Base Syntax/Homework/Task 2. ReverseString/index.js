const reverseString = (str) => {
    // Начало
    let revers = '';
    for (let i = str.length; i > 0; i--){
        revers += str.slice(i - 1, i)
    }
    return revers;
    // Конец
};

export default reverseString;