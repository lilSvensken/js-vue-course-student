const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    // filter, includes, newSet
    return {
        intersection : arrOne.filter(element => {
            return arrTwo.includes(element);
        }),
        union : [...new Set([...arrOne, ...arrTwo])]
    }
    // Конец
};

export default getIntersectionUnion;
