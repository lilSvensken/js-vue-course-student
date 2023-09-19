const getLastWordLength = (str) => {
    str = str.trim();
    const arr = str.split();
    return arr.at(-1).length
};

export default getLastWordLength;