const RoundNRootNUM = (num) => {
    // Start
function RoundNRootNUM(number) {
  if (number < 0) {
    return 'error';
  }

    // End
};
  var root = Math.sqrt(number);
  var rounded = Math.floor(root * 100) / 100;
  return rounded.toString();
}

export default RoundNRootNUM;
console.log(RoundNRootNUM(5843));  // 76.43
console.log(RoundNRootNUM(18248)); // 42.75
console.log(RoundNRootNUM(0));     // 0
console.log(RoundNRootNUM(5));     // 2.23
console.log(RoundNRootNUM(-100));  // 'error'