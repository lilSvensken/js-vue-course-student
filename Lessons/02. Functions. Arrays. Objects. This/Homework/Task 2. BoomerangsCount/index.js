const getBoomerangsCount = (numbers) => {
    // Начало
    let k = 0;
    for(let i = 0; i < numbers.length - 2; i++) {

        let mas2 = numbers.slice(i, i + 3);
        if (mas2[0] === mas2[2] && mas2[0]!== mas2[1]) {
            k = k + 1;
        }

    }
    return k;
    // Конец
};

export default getBoomerangsCount;