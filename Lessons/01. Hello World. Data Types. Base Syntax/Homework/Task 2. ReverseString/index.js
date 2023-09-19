const reverseString = (str) => {
    if (str === "") 
        return "";

    else
        return reverseString(str.slice(1, str.length)) + str.charAt(0)
};

export default reverseString;