const getLastWordLength = (str) => {
    // Начало
    let cnt = 0;
    str = str.trim();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            cnt++;
        } else {
            cnt = 0;
        }
    }
    return cnt;
    // Конец
};

export default getLastWordLength;
