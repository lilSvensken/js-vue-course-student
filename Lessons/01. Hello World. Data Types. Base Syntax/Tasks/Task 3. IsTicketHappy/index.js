const isTicketHappy = (num) => {
    let dif = 0
    for (let i = 0; i < num.length / 2; i++){
        dif += parseInt(num[i])
        dif -= parseInt(num[num.length - 1 - i])
    }
    return dif === 0;
};

export default isTicketHappy;
