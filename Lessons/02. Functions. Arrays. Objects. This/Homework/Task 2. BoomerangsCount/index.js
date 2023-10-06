const getBoomerangsCount = (numbers) => {
    // Начало
<<<<<<< HEAD
    let cnt = 0;
    for (let i = 0; i < numbers.length - 2; i++) {
        if ((numbers[i] === numbers[i + 2]) && (numbers[i] !== numbers[i + 1])) {
            cnt++;
        }
    }
    return cnt;
=======
    let count = 0;
    for (let i = 0; i < numbers.length-2; i++){
        if (numbers[i] === numbers[i+2] && numbers[i+1] != numbers[i]){
            count++
        }
    }
    return count;
>>>>>>> e3a22bd2a6535a38e74a74a326de368ead0a142c
    // Конец
};

export default getBoomerangsCount;