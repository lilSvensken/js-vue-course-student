const isThreePower = (num) => {
  if (num < 1) {
    return false;
  }
  while (num > 1) {
    if (num % 3 !== 0) {
      return false;
    }
    num /= 3;
  }
  return true;
};

export default isThreePower;
