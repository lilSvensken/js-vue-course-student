const isSequenceContinuous = (numbers) => {
function isSequenceContinuous(sequence) {
  if (sequence.length <= 1) {
    return  false ;
  }

};
  for (var i = 1; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i - 1] + 1) {
      return  false ;
    }
  }

export default isSequenceContinuous;
  return true;
}

console.log(isSequenceContinuous([10, 11, 12, 13]));
console.log(isSequenceContinuous([-5, -4, -3]));
console.log(isSequenceContinuous([10, 11, 12, 14, 15]));
console.log(isSequenceContinuous([1, 2, 2, 3]));
console.log(isSequenceContinuous([7]));
console.log(isSequenceContinuous([]));