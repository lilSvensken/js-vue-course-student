const reverseString = (str) => {
    return str === '' ? '' : reverseString(str.slice(1)) + str[0];
};

export default reverseString;