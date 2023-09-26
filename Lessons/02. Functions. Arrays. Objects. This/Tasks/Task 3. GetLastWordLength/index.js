const getLastWordLength = (str) => {
   let  word = str.trim();
  const arr = word.split(" ")
  return(arr[arr.length - 1].length)
};

export default getLastWordLength;