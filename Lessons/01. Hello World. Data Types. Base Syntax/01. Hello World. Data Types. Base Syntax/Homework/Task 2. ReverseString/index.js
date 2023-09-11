const reverseString = (str)=> {
  if (str.length <= 1) {
    return str;
  }
  return str.slice(-1) + reverseString(str.slice(0, -1));
}

export default reverseString;
