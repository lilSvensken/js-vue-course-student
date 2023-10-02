const getBoomerangsCount = (numbers) => {
    let boomerangsCount = 0;
    if (numbers.length < 3) return boomerangsCount;
    for(let i = 0; i < numbers.length - 2; i++) {
        if (numbers[i] === numbers[i+2] && numbers[i] != numbers[i+1]) boomerangsCount++;
    }
    return boomerangsCount;
};

export default getBoomerangsCount;