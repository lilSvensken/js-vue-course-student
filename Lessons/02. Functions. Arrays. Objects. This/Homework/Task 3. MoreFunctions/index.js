const moreFunction = (number) => {
    return (numbers) => {
        return numbers.map((nums) => {
            return nums / number
        })
    }
};

export default moreFunction;