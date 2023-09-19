const getHammingWeight = (num) => {
    let weight = 0;

  while (num !== 0) {
    weight += num & 1; 
    num >>>= 1; 
  }

  return weight;
};

export default getHammingWeight;