const moreFunction = (number) => {
    // Начало
<<<<<<< HEAD
    return function (numbers) {
        let newArr = [];
        for (let i = 0; i < numbers.length; i++) {
            newArr[i] = numbers[i] / number;
        }
        return newArr;
=======
    return  function(arr){
        return arr.map(item => item / number);       
>>>>>>> e3a22bd2a6535a38e74a74a326de368ead0a142c
    }
    // Конец
};

export default moreFunction;