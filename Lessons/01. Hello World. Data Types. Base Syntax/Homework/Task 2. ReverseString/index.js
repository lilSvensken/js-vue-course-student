const reverseString = (str) => {
    if (str.length === 0) {
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
};

export default reverseString;

