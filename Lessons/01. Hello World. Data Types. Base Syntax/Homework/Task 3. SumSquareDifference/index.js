const sumSquareDifference = (num) => {
    let sumKvadr = 0;
    let kvadrSum = 0;
    for(let i = 1; i <= num; i++){
        sumKvadr = i * i;
    }
    for(let i = 1; i <= num; i++){
        kvadrSum += i;
    }
    kvadrSum = kvadrSum * kvadrSum;
    return kvadrSum - sumKvadr;

};

export default sumSquareDifference;