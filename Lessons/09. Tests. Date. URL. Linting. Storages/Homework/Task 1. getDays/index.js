const getDaysAmount = (month, year) => {
    const validMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (!validMonths.includes(month)) {
        return 'error'; // Несуществующий месяц
    }

    const monthIndex = validMonths.indexOf(month);

    // Для февраля проверяем високосный ли год
    if (monthIndex === 1) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return 29; // Високосный год
        } else {
            return 28; // Обычный год
        }
    }

    const date = new Date(year, monthIndex + 1, 0);
    return date.getDate();
};

export default getDaysAmount;
