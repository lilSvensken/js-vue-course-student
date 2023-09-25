const isSequenceContinuous = (numbers) => {
    // Начало
    let flag = false;
    if (numbers.length > 1){
        for (let i = 1; i < numbers.length;i++){
            if (numbers[i] !== numbers[i-1] + 1){
                flag = false;
                break;
            } else{
                flag = true;
            }
        }
    }
    
    return flag;
    
    // Конец
};
export default isSequenceContinuous;

