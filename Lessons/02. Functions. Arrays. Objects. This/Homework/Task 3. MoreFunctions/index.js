const moreFunction = (number) => {
    const div = (arr) =>{
        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            newArr[i] = arr[i]/number;
        }
        return newArr;
    };
    return div;
};
export default moreFunction;