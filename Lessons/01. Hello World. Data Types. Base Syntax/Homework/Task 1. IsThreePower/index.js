const isThreePower = (num) => {
    // Начало
    let i = 1;
    let res = (num === 1 ? true : false);
    while (i < num) {
        i*=3;
        res = (i === num  ? true : false);
    }

    return res;
    // Конец
};

export default isThreePower;