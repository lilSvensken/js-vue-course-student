function reverseString(str)  {
    let rev = "";
    for (let i = str.length-1; i>=0; i--){
        rev = rev + str.slice(i, i);
    }
    return rev;

};

export default reverseString;