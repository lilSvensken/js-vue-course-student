const getIntersectionUnion = (arrOne, arrTwo) => {
<<<<<<< HEAD
	return {
		intersection: arrOne.filter(item => {
			return arrTwo.includes(item)
		}),
		union: [...new Set([...arrOne, ...arrTwo])]
	}
=======
    const intersection = arrOne.filter((number) => arrTwo.includes(number))
    const union = [...new Set([...arrOne, ...arrTwo])]
    return [...intersection, ...union]
>>>>>>> 8042429 (homework)
};

export default getIntersectionUnion;
