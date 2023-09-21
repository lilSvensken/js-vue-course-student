const sumSquareDifference = (num) => {
    let KvSum = 0;
    let SumKv = 0;
    for (let i = 1; i<=num; i++){
        KvSum += i;
        SumKv += i**2;
    }
    KvSum = KvSum**2;
    return Math.abs(KvSum-SumKv);
};

export default sumSquareDifference;