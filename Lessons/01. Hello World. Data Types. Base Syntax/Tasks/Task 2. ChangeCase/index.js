
const changeCase = (str) => {
    let s = ""
    for (let i = 0; i < str.length; i++) {
        s += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase()
    }
    return s
};

export default changeCase;
