const roundAndRootNumber = (num) => {
  // Начало
  if (num < 0) {
    return "error";
  }

  const root = Math.sqrt(num);
  const roundedRoot = root.toFixed(2);

  return roundedRoot;
  // Конец
};

export default roundAndRootNumber;
