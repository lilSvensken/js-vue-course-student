function getDaysAmount(month, year) {
    const date = new Date(`${month} 1, ${year}`);
    if (isNaN(date)) {
        return 'error';
    }

    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}
export default getDaysAmount;
console.log(getDaysAmount('May', 1918));        // 31
console.log(getDaysAmount('January', 2021));    // 31
console.log(getDaysAmount('February', 1564));   // 29
console.log(getDaysAmount('February', 1755));   // 28
console.log(getDaysAmount('September', 1984));  // 30
console.log(getDaysAmount('Catober', 2021));