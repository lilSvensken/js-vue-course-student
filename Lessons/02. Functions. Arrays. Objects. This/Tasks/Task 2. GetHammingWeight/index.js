const getHammingWeight = (num) => {
  let count=0;
  const str = num.toString(2).split("");
  const arr = str.map(Number);
  for(let i = 0; i < arr.length ; i ++){
    if(arr[i] === 1){
      count++
    }
  }return count;
};

export default getHammingWeight;