const getBudget = (people) => {
    let fb = 0;
    for(let i = 0; i < people.length; i++){
        fb += people[i].budget;
    }
    return fb;
};
export default getBudget;