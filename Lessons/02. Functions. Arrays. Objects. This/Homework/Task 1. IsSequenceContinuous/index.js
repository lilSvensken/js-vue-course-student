const isSequenceContinuous = (numbers) => {
    let j = numbers[0];
    let flag = true;
    if (numbers.length<2){
        return false;
    }
    for (let i = 0; i<numbers.length; i++){
        if (j!== numbers[i]){
            flag = false;
        }
        j++;
    }
    return flag;
};

export default isSequenceContinuous;