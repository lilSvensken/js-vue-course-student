const roundAndRootNumber = (num) => {
    // Начало
    let answer = Math.sqrt(num);
    if (num < 0) return "error";
    else {
        return (String)(Math.round(answer * 100) / 100);
        //toFixed(2);
    }
    // Конец
};
export default roundAndRootNumber;