const reverseString = (str) => {
  if (str.length === 0) {
    return "";
  } else {
    return str.slice(-1) + reverseString(str.slice(0, -1));
  }
};

export default reverseString;
