const getIntersectionUnion = (arrOne, arrTwo) => {
    return {
      intersection: arrOne.filter(item => {
        return arrTwo.includes(item)
      }),
      union: [...new Set([...arrOne, ...arrTwo])]
    }
  };

export default getIntersectionUnion;
