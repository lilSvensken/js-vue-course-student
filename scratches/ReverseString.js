const reverseString = (str) => {

function reverse(str) {
  if (str === "") {
    return "";
  }

  return  reverse ( str . slice ( 1 ) )  +  str . charAt ( 0 ) ;
}

console.log(reverse('javascript'));
console.log(reverse('elosnoc'));
};

export default reverseString;