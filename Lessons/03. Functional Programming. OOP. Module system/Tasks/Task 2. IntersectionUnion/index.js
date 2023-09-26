const getIntersectionUnion = (arrOne, arrTwo) => {
    // Начало
    const intersection = arrOne.filter(x => arrTwo.includes(x)) ; /*пересечение*/
    const union =  [...new Set([...arrOne, ...arrTwo])]; /*хотя бы в 1 */
    
    return {
        intersection,
        union: union.join(',')
    };
    // Конец
};
export default getIntersectionUnion;
