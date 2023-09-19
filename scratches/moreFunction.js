const moreFunction = (number) => {
function moreFunction(number) {
  return function(arr) {
    return arr.map(function(num) {
      return num / number;
    });
  }
}


};

export default moreFunction;
const newFunction = moreFunction(2);
console.log(newFunction([10, 11, 12, 20]));