const isSequenceContinuous = (numbers) => {
    // Начало
    let flag = false;
    if (numbers.length > 1) {
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] + 1 === numbers[i + 1]) {
                flag = true;
            } else {
                return false;
            }
        }
    }
    return flag;
    // Конец
};

export default isSequenceContinuous;