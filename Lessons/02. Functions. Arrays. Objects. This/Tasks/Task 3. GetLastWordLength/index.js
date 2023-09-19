const getLastWordLength = (str) => {
    str = str.trim();
    let words = str.split(' ');
    return words[words.length - 1].length;
    /*let len = 0;
    for(let i = str.length; i > 0; i--){
        while (str[i] !== ' '){
            len++;
        }
    }
    return len;*/
};

export default getLastWordLength;