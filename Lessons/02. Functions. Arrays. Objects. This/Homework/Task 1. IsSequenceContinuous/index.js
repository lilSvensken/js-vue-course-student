const isSequenceContinuous = (numbers) => {
    // Начало
    let answer = true;
    if (numbers.length < 2) {
        return answer = false;
    } else {
        for (let i = 0; i < numbers.length - 1; i++) {
            if ((numbers[i] + 1) !== (numbers[i + 1])) {
                return answer = false;
            }
        }
    }

    return answer
    // Конец
};

export default isSequenceContinuous;