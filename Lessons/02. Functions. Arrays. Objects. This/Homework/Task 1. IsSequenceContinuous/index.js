const isSequenceContinuous = (numbers) => {
    let flag = true;
    if(numbers.length > 1){
        for(let i = 0; i < numbers.length - 1; i++){
            if(numbers[i+1] - numbers[i] === 1){
                flag = true;
            }
            else{
                flag = false;
                break;
            }
        }
    }
    else{
        flag = false;
    }
    return flag;
};
export default isSequenceContinuous;