const getLastWordLength = (str) => {
    str = str.trim();
    let words = str.split(' ');
    return words[words.length - 1].length;
}
export default getLastWordLength;
