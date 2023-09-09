const changeCase = (str) => {
    // Начало

    let newstr = "";
    for(let i = 0; i < str.length; i++) {
        if (str[i] === " ") newstr += " ";
        else {
            if (str[i] === str[i].toUpperCase()) newstr += str[i].toLowerCase()
            if (str[i] === str[i].toLowerCase()) newstr += str[i].toUpperCase()
        }
    }
    return newstr;
    // Конец
};
export default changeCase;