const moreFunction = (number) => {

    // Начало

    return function(arr){
        return arr.map(a => a/number)
    }
    // Конец
}
const newFunction = moreFunction(2);
export default moreFunction;