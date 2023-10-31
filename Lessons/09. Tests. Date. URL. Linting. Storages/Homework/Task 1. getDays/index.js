function getDaysAmount(month, year) {
    const monthNumber = new Date(Date.parse(`${month} 1, ${year}`)).getMonth();
    if (isNaN(monthNumber)) {
        return 'error';
    }
    const date = new Date(year, monthNumber + 1, 0);
    return date.getDate();
}

export default getDaysAmount;