const getLastWordLength = (str) => {
    // Начало
    str = str.trim();
    const words = str.split(' ');
    const lastWord = words[words.length - 1];
    return lastWord.length;

    // Конец
};

export default getLastWordLength;