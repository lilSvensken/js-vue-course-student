const transformFortyTwo = (numbers) => {
  // Начало

  return numbers.map((num) => {
    return num % 42 === 0 ? "forty two!" : num;
  });
  // Конец
};
/*
export default transformFortyTwo;
*/
console.log(transformFortyTwo([1,24,42,84]));
