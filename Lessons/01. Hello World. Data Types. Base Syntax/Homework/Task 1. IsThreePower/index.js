const isThreePower = (num) => {
    // Начало
    let bool = false;
    for (let i = 0; i < num; i++) {
        if (Math.pow(3, i) == num)
            bool = true
    }
    return bool;

    // Конец
};

export default isThreePower;