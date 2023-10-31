const getDaysAmount = (month, year) => {
    const monthNames = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11
    };

    const monthIndex = monthNames[month];

    if (monthIndex === undefined) {
        return 'error';
    }

    const date = new Date(year, monthIndex + 1, 0);

    return date.getDate();
};
export default getDaysAmount;