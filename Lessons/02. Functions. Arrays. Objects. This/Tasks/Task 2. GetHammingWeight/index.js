<<<<<<< HEAD
const getHammingWeight = (num) => {
    // Начало
    let sum = 0;
    while(num !== 0 ) {
        sum += num % 2;
        num =  parseInt(num / 2);
    }
    return sum
    // Конец
};

console.log(getHammingWeight(4))
=======
const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
	return convertToBinary(num).split("").filter(item => item === '1').length;
};

export default getHammingWeight;
>>>>>>> 0cc445e2c23a9942e877bb69b032102dabb177ae
