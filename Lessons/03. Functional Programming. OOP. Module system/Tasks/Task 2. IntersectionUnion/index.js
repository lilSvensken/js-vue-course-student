const getIntersectionUnion = (arrOne, arrTwo) => {
    return {
        intersection: arrOne.filter(elem => {
            return arrTwo.includes(elem);
        }),   // массив пересекающихся значений
        union: [...new Set([...arrOne, ...arrTwo])]
    };
};
export default getIntersectionUnion;

