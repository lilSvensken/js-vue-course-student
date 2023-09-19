const Cases = (str) => {
    // Start
function Cases(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

    // End
};

export default Cases;
console.log(Cases('Hello, World!')); // Hello, World!
console.log(Cases('Yoo!'));   // Yoo!