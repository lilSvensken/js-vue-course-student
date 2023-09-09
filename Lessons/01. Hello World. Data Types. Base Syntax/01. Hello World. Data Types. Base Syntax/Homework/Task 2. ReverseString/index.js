const reverseString = (str) => {
    // Начало
    function rec(str, newStr) {
        if (str.length === 1) {
            return newStr += str;
        } else {
            newStr += str[str.length - 1];
            rec(str.slice(0, str.length - 1), newStr);
        }
    }

    let newStr = "";
    return rec(str, newStr);
    // Конец
};

export default reverseString;