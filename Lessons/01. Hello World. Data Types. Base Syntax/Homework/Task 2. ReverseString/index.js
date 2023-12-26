const reverseString = (str) => {
    let newStr = '';
    for(let i = 0; i < str.length; i++){
      newStr = str.slice(i, i+1) + newStr;
    }
    return newStr;
  };

export default reverseString;