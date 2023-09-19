const sumSquareDifference = (num) => {
    var sumFirst = 0;
    var baseSumm = 0;
    var sqBaseSumm = 0
    for(let i = 0; i <= num; i++){
        sumFirst = sumFirst +  i*i; //2^2+3^2+...
        baseSumm = baseSumm + i; // 1+2+3
        sqBaseSumm = Math.pow(baseSumm, 2);

    }return sqBaseSumm - sumFirst;

};

export default sumSquareDifference;