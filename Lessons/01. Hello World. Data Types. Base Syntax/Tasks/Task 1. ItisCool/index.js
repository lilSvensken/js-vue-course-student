const itisCool = (begin, end) => {
    // Начало
    for (let i = begin; i <= end; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("ItisCool");
        } else if (((i % 3 === 0) && (i % 5 !== 0))) {
            console.log("Itis");
        } else if ((i % 3 !== 0) && (i % 5 === 0)) {
            console.log("Cool");
        } else {
            console.log(i);
        }
    }
    // Конец
};

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

export default itisCool;
