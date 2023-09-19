const reverseString = (str) => {
    if(str === ''){
        return '';
    }else{
        let revStr = '';
        for(let i = 1; i < str.length + 1; i++){
            revStr = revStr + str.slice(str.length - i, str.length - i + 1);


        }
        return revStr;
    }
};

export default reverseString;