const getLastWordLength = (str) => {
    // Начало
    return str.trim().split(' ').at(-1).length
    // Конец
};

export default getLastWordLength;