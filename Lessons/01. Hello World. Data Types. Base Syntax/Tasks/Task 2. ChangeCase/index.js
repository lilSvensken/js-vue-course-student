const changeCase = (str) => {
    // Начало
    let changedStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            changedStr += str[i].toLowerCase();
        } else {
            changedStr += str[i].toUpperCase()
        }
    }
    return changedStr;
    // Конец
};

export default changeCase;
