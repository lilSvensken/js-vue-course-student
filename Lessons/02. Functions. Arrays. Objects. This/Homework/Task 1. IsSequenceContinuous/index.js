const isSequenceContinuous = (numbers) => {
    // Начало
    if(numbers.length < 2) {
        return false;
    }
    else {
        for (let i = 1; i < numbers.length - 1 ; i++) {
            if (numbers[i] + 1 !== numbers[i + 1]) {
                return false;

            }
        }
        return true;
    }

    // Конец
};

export default isSequenceContinuous;