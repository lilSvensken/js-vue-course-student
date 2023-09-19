const getBudget = (people) => {
    // Начало
    return people.reduce((totalBudget, person) =>{
        return totalBudget + person.budget;
    },0);
    // Конец
};

export default getBudget;
