
const transformFortyTwo = (numbers) => {
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 42 === 0){
            numbers[i] = 'forty two!';
        }
    }
    return numbers;
};
export default transformFortyTwo;
