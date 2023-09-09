const reverseString = (str) => {
    // Начало
    let newstr = '';
    for (let i = str.length; i > 0; i--){
        newstr += str.slice(i - 1, i)
    }
    return newstr;
    // Конец
};

export default reverseString;