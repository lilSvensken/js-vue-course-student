const getHammingWeight = (num) => {
    let hammingWeight = 0;
    while(num > 0){
        hammingWeight += num % 2;
        num = Math.floor(num / 2);
    }
    return hammingWeight;
};
export default getHammingWeight;