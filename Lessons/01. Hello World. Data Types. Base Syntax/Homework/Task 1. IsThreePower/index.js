const isThreePower = (num) => {
    // Начало
    let x = num
    let temp = 0
        while (x > 2) {
            x /= 3
            temp++
        }
       return  Math.pow(3,temp) === num
    // Конец
};

export default isThreePower;