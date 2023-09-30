const getBoomerangsCount = (numbers) => {
    // Начало
    let totalBoomerang = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                let boomerang = numbers.slice(i + 1, j);
               if (boomerang.length > 0) {
                    totalBoomerang += boomerang.length;
               }
                break;
            }
        }
    }
    return totalBoomerang;
    // Конец
};

export default getBoomerangsCount;