const getLastWordLength = (str) => {
    // Начало
    return str.trim().split(' ').at(-1).length;
    // Конец
};

console.log(getLastWordLength('hello, world!  '))