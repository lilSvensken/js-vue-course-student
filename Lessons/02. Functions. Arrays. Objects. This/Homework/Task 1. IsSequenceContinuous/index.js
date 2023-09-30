const isSequenceContinuous = (numbers) => {
    // Начало
    let counter = 0;
    let keyCompare = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        counter++;
    }
    let counterForTrue = 0;
    if (counter > 1) {
        for (let i = 0; i < numbers.length; i++) {
            if (keyCompare + i === numbers[i]) {
                counterForTrue++;
            }
        }
        return counterForTrue === numbers.length;
    } else {
        return false;
    }
    // Конец
};

export default isSequenceContinuous;