const isSequenceContinuous = (numbers) => {
    // Начало
<<<<<<< HEAD
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
=======
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
>>>>>>> e3a22bd2a6535a38e74a74a326de368ead0a142c
    // Конец
};

export default isSequenceContinuous;