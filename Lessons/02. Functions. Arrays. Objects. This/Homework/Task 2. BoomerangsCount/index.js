const getBoomerangsCount = (numbers) => {
    if (numbers.length < 2) return 0

    let res = 0
    for (let i = 2; i <= numbers.length; i++){
        if (numbers[i] == numbers[i-2] && numbers[i] != numbers[i-1]) res += 1
    }

    return res
};

export default getBoomerangsCount;