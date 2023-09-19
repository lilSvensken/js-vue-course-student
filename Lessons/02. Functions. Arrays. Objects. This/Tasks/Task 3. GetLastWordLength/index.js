const getLastWordLength = (str) => {
  // Начало
  str = str.trim();
  const words = str.split(" ");

  if (str === "" || words.length === 0) {
    return 0;
  }

  const lastWord = words[words.length - 1];
  return lastWord.length;
  // Конец
};

export default getLastWordLength;


