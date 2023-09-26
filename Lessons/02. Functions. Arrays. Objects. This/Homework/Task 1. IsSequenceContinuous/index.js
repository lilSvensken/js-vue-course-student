const isSequenceContinuous = (numbers) => {
    // Начало
    let bool = false
    for (let i = 0; i < numbers.length-1; i++) {
        if(numbers[i] + 1 == numbers[i + 1]){
            bool = true
        } else {
            bool = false
            break
        }
    }
    return bool
    // Конец
};

export default isSequenceContinuous;