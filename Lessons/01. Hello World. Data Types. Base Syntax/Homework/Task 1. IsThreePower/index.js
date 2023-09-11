const count = 0;
const isThreePower = (num) => {
if(num>0){
  while(num%3===0){
    num/=3;
  }return num === 1
}
};
console.log(isThreePower(1));
console.log(isThreePower(27));
console.log(isThreePower(81));
console.log(isThreePower(25));