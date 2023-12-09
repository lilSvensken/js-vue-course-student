const getDaysAmount = (month, year) => {
    // Начало
    let numMonth;
    switch (month) {
        case 'January':
            numMonth = 1;
            break;
        case 'February':
            numMonth = 2;
            break;
        case 'March' :
            numMonth = 3;
            break;
        case 'April' :
            numMonth = 4;
            break;
        case 'May' :
            numMonth = 5;
            break;
        case 'June' :
            numMonth = 6;
            break;
        case 'July' :
            numMonth = 7;
            break;
        case 'August' :
            numMonth = 8;
            break;
        case 'September' :
            numMonth = 9;
            break;
        case 'October' :
            numMonth = 10;
            break;
        case 'November' :
            numMonth = 11;
            break;
        case 'December' :
            numMonth = 12;
            break;
        default :
            numMonth = 13;
            break;
    }

    if (numMonth !== 13) {
        const date = new Date(year, numMonth, 0);
        return date.getDate();
    } else return 'error';
    // Конец
};

export default getDaysAmount;