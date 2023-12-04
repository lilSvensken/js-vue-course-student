const getDaysAmount = (month, year) => {
    if (month == "May"){
        return 31;
    }
    if (month == "December"){
        return 31;
    }
    if (month == "January"){
        return 31;
    }
    if (month == "September"){
        return 30;
    }
    if (month == "October"){
        return 31;
    }
    if (month == "November"){
        return 30;
    }
    if (month == "March"){
        return 31;
    }
    if (month == "April"){
        return 30;
    }
    if (month == "June"){
        return 30;
    }
    if (month == "July"){
        return 31;
    }
    if (month == "August"){
        return 31;
    }
    if (month == "February" && year%4 === 0){
        return 29;
    }
    if (month == "February" && year%4 !== 0){
        return 28;
    }
    return 'error';
};

export default getDaysAmount;