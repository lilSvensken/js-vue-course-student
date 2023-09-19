const getLoopedCount = (numbers) => {

};
function getLoopedCount(arr) {
  var count = 0;

export default getLoopedCount;
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] === arr[i - 1] && arr[i] !== arr[i + 1]) {
      count++;
    }
  }

  return count;
}

console.log(getLoopedCount([10, 11, 12, 13]));
console.log(getLoopedCount([10, 11, 10, 13]));
console.log(getLoopedCount([9, 5, 9, 5, 1, 1, 1]));
console.log(getLoopedCount([9, 5, 4, 5, 4, 1, 4]));
console.log(getLoopedCount([]));