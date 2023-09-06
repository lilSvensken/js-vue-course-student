const isTicketHappy = (num) => {
    // Начало
    let i = num.length;
    let firsthalf = num.slice(0, i/2)
    let secondhalf = num.slice(i/2, i)
    let sum1 = 0;
    let sum2 = 0;

    for (let j = 0; j < num.length/2; j++) {
        sum1 += Number(firsthalf[j]);
        sum2 += Number(secondhalf[j]);
    }
    return sum1 === sum2;
    // Конец
};
export default isTicketHappy;