const moreFunction = (number) => {
    return (arr) => {
        for(let i = 0; i < arr.length; i++){
            arr[i]= arr[i]/2
        }
        return arr;
    }
};

export default moreFunction;