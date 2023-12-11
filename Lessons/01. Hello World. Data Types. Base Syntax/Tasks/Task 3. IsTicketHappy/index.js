const isTicketHappy = (numStr) => {
  const length = numStr.length
  const firstNum = numStr
    .slice(0, length / 2)
    .split('')
    .reduce((a, b) => Number(a) + Number(b), 0)

  const lastNum = numStr
    .slice(length / 2, length)
    .split('')
    .reduce((a, b) => Number(a) + Number(b), 0)

  return firstNum === lastNum
}

// другой вариант записи этой же функции:
// const isTicketHappy = (num) => {
// 	// Начало
// 	let balance = 0;
//
// 	for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
// 		balance += +num[i] - +num[j];
// 	}
// 	return balance === 0;
// 	// Конец
// };

export default isTicketHappy
