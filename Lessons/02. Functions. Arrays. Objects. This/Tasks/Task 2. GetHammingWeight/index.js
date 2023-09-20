<<<<<<< HEAD
const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
	return convertToBinary(num).split("").filter(item => item === '1').length;
=======
const getHammingWeight = (num) => {
    const bin = num.toString(2).split('')
    let res = 0
    bin.map((n) => {
        if (n == '1') res += 1
    })
    return res
>>>>>>> 8042429 (homework)
};

export default getHammingWeight;
