const getBudget = (people) => {
    // Начало
    const totalBudget = people.reduce((acc, member) => acc + member.budget, 0);

    return totalBudget;
    // Конец
};

export default getBudget;