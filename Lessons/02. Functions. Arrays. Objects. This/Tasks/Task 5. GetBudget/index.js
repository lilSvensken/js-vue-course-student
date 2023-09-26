const getBudget = (people) => {
    // Начало
    return people.reduce((a,b) => {
        return a + b.budget;
    }, 0)
    // Конец
};

export default getBudget;