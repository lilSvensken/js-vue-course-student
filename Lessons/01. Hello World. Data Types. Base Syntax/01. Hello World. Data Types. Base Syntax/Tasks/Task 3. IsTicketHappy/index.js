const isTicketHappy = (num) => {
    // Начало
    if (num.length % 2 === 0) {
        let right = 0;
        let left = 0;
        let i = 0;
        for (i; i < num.length / 2; i++) {
            right += Number(num[i]);
        }
        for (i; i < num.length; i++) {
            left += Number(num[i]);
        }
        return right === left;
    } else {
        return false;
    }
    // Конец
};

export default isTicketHappy;