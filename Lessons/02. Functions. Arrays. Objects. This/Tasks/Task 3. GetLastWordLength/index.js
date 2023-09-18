const getLastWordLength = (str) => {
    let array = str.trim().split(' ')
    return array[array.length - 1].length
};

export default getLastWordLength;
