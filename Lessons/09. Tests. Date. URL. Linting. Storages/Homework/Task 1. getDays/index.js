const getDaysAmount = (month, year) => {
    const validMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    if (!validMonths.includes(month)) {return "error"}
    const num_month = new Date(month + " 1, " + year).getMonth()
    const even_months = [3, 5, 8, 10]
    const odd_months = [0, 2, 4, 6, 7, 9, 11]
    return even_months.includes(num_month) ? 30 : odd_months.includes(num_month) ? 31 : ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28  
};

export default getDaysAmount;