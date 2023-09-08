const sumSquareDifference = (num) => {
  let sum = 0;
  let sumofsquare = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
    sumofsquare += i * i;
  }
  const squareofsum = sum * sum;
  return squareofsum - sumofsquare;
};

export default sumSquareDifference;
