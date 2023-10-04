const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length < 2) {
        return false
    }
    let temp = 0
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] + 1 !== numbers[i + 1]) {
            temp++
        }
    }
    if (temp === 0) {
        return true
    } else {
        return false
    }
    // Конец
};
export default isSequenceContinuous;