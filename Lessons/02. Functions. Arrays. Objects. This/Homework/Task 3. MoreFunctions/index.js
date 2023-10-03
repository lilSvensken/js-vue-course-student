const moreFunction = (number) => {
    // Начало
    return  function(arr){
        return arr.map(item => item / number);       
    }
    // Конец
};

export default moreFunction;