const roundAndRootNumber = (num) => {
    // Начало
    if (num >= 0) {
        const res = Math.sqrt(num);
        return String(Math.floor(res * 100) / 100);
    } else {
        return "error";
    }
    // Конец
};

export default roundAndRootNumber;
