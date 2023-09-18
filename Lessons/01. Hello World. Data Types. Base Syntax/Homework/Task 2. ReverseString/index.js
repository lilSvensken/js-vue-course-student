const reverseString = (str) => {
    // Начало
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        str2 = str.slice(i, i + 1) + str2;
    }
    return str2;
    // Конец
};

export default reverseString;