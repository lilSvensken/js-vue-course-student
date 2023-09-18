const getHammingWeight = (num) => {
    let secNum = num.toString(2)
    let count = 0;
    for (let i = 0; i < secNum.length; i++){
        count += parseInt(secNum[i]);
    }
    return count;
};
export default getHammingWeight;