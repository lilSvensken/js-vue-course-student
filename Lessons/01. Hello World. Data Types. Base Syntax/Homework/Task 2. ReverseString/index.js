const reverseString = (str) => {
    // Начало
    let str2 = ''
    for (let i = str.length; i >= 0 ; i--) {
        str2 = str2 + str.slice(i, i + 1)
    }
    return str2
    // Конец
};

export default reverseString;