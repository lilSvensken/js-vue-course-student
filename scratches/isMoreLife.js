const isMoreLife = (num) => {
    // Start
function isMoreLife() {
  var halfLength = ML.length / 2;

    // End
};
  var firstHalf = MoreLife.substring(0, halfLength);
  var secondHalf = MoreLife.substring(halfLength);

export default isisMoreLife;
  var  firstHalfSum  =  0 ;
  var secondHalfSum = 0;

  for (var i = 0; i < halfLength; i++) {
    firstHalfSum += parseInt(firstHalf.charAt(i));
    secondHalfSum  +=  parseInt ( secondHalf . charAt ( i ) ) ;
  }

  return firstHalfSum === secondHalfSum;
}

console.log(isMoreLife('386926')); // true
console.log(isMoreLife('211003')); // false
console.log(isMoreLife('1552'));   // false
console.log(isMoreLife('044503')); // true
console.log(isMoreLife('00'));     // true