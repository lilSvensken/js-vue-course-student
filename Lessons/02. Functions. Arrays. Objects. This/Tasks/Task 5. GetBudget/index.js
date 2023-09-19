const getBudget = (people) => {
    return people.reduce((a,b) => a + b.budget,0)
}
export default getBudget;
