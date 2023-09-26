const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    return {
        intersection: arrOne.filter(item => {
            return arrTwo.includes(item)
    }),
        union: [...new Set([arrOne, arrTwo])]
    }
    // Конец
};

export default getIntersectionUnion;