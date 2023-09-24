const isSequenceContinuous = (numbers) => {
    if (numbers.length > 1) {
        let num = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] - num === 1) {
                num = numbers[i]
            }
            return false;
        }
        return true;
    }
    return false;
};

export default isSequenceContinuous;