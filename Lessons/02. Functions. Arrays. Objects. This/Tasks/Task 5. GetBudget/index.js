const getBudget = (people) => {
    // Начало
    const mappedPeople = people.map((people) => {
        return people.budget;
    });
    let cnt = 0;
    for (let i = 0; i < mappedPeople.length; i++) {
        cnt += mappedPeople[i];
    }
    return cnt;
    // Конец
};

export default getBudget;
