const reverseString = (str) => {
    // Начало
    if (str.length <= 1) {
        return str;
    } else {
        return reverseString(str.slice(1)) + str[0];
    }

    // Конец
};

export default reverseString;