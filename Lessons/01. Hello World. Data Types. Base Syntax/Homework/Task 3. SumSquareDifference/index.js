const sumSquareDifference = (num) => {
    let sum1 = 0, sum2 = 0;
    for (let i = 1; i <= num; i++){
      sum1 += i**2;
      sum2 += i;
    }
    sum2 **= 2; 
    return sum2 - sum1;
  };

export default sumSquareDifference;