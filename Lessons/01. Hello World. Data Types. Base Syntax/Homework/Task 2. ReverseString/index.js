const reverseString = (str) => {
    if (str.length > 0) return reverseString(str.slice(1)) + str[0];
    return '';
}

export default reverseString;