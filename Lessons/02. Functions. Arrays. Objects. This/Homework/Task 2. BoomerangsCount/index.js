const getBoomerangsCount = (numbers) => {
    // Начало
    let cnt = 0;
    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] === numbers[i-2]){
            cnt++;
        }
    }
    return cnt;
    // Конец
};
export default getBoomerangsCount;

