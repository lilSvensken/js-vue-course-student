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
function getDaysAmount(month, year) {
    let numberMonth = monthNames[month]
    if (numberMonth === undefined) {
        return 'error';
    }
    const date = new Date(year, numberMonth + 1, 1);
    date.setDate(date.getDate() - 1)
    return date.getDate();

}
 export default getDaysAmount;