const itisCool = (begin, end) => {
	if (begin <= end) {
		const isItis = begin % 3 === 0;
		const isCool = begin % 5 === 0;

		if (isItis && isCool) {
			console.log('ItisCool');
		} else if (isItis) {
			console.log('Itis');
		} else if (isCool) {
			console.log('Cool');
		} else {
			console.log(begin);
		}
		begin++;
		itisCool(begin, end);
	}
};



export default itisCool;
