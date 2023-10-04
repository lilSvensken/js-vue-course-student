const isSequenceContinuous = (numbers) => {
    // Начало
    let res;

    if (numbers.length === 1 || numbers.length === 0)
        return res = false;

    for (let i = 0; i < numbers.length-1; i++){
        if (numbers[i] - numbers[i+1] == -1){
            res = true;
        } else{
             return res = false;
        }
    }
    return res;
    // Конец
};

export default isSequenceContinuous;