const isTicketHappy = (num) => {
    let left = 0
    let right = 0
    for (let i = 0; i < num.length / 2; i++){
        left += parseInt(num[i])
        right += parseInt(num[num.length - 1 - i])
    }
    return left === right;
};

export default isTicketHappy;
