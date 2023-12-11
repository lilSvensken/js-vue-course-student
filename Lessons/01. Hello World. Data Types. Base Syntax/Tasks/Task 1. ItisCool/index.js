const itisCool = (begin, end) => {
  if (begin <= end) {
    const isItis = begin % 3 === 0
    const isCool = begin % 5 === 0

    if (isItis && isCool) {
      console.log('ItisCool')
    } else if (isItis) {
      console.log('Itis')
    } else if (isCool) {
      console.log('Cool')
    } else {
      console.log(begin)
    }
    begin++
    itisCool(begin, end)
  }
}

// более лаконичная  этой же функции
// const itisCool = (begin, end) => {
// 	for (let i = begin; i <= end; i += 1) {
// 		const hasItis = i % 3 === 0;
// 		const hasCool = i % 5 === 0;
// 		const itisPart = hasItis ? 'Itis' : '';
// 		const coolPart = hasCool ? 'Cool' : '';
// 		console.log(`${itisPart}${coolPart}` || i);
// 	}
// };

export default itisCool
