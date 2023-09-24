const moreFunction = (number) => {
    const getArray = (array) => {
        return array.map((n) => n/number);
    }
    return getArray;
}
export default moreFunction;