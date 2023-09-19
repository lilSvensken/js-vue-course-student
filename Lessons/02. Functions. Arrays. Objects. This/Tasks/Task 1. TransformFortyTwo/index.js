const transformFortyTwo = (numbers) => {
    return numbers.map(num => {
        if (num % 42 === 0) num = "forty two!"
        return num
    })
};

export default transformFortyTwo;
