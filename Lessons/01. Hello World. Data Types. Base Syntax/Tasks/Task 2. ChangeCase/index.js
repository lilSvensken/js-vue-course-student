const changeCase = (str) => {
  // Начало
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toLowerCase()) {
      char = char.toUpperCase();
    } else {
      char = char.toLowerCase();
    }
    res += char;
  }
  return res;
  // Конец
};

export default changeCase;
