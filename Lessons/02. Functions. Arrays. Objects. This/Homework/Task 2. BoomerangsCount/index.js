const getBoomerangsCount = (numbers) => {
    let count = 0;
    if (numbers.length < 3) return count;
    for(let i = 1; i < numbers.length - 1; i++){
        if (numbers[i-1] == numbers[i+1] && numbers[i-1] != numbers[i]) count++;
    }
    return count;
};   

export default getBoomerangsCount;