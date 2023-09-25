const moreFunction = (number) => {
    return (newArray) => {
        for (let i =0; i< newArray.length; i++) {
            newArray[i] = newArray[i] / number
        }
        return newArray
    }
};

export default moreFunction;