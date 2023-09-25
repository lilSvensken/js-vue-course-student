const getHammingWeight = (num) => {
  // Начало
  let cnt = 0;
  while (num > 0) {
    if (num % 2 == 1) {
      cnt++;
    }
    num = Math.floor(num / 2); /*округляет до меньшей стороны */
  }
  return cnt;
  // Конец
};

export default getHammingWeight;
