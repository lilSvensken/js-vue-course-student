const isTicketHappy = (num) => {
  // Начало

  const halfLength = num.length / 2;
  const firstHalf = num.slice(0, halfLength);
  const secondHalf = num.slice(halfLength);

  const sum = (str) => str.split("").reduce((acc, n) => acc + Number(n), 0);

  return sum(firstHalf) === sum(secondHalf);
  // Конец
};

export default isTicketHappy;
