const isThreePower = (num) => {
    for(let i = 0; i < Math.sqrt(num); i++){
        return Math.pow(3, i) === num;
    }
};
console.log(isThreePower(0));
//export default isThreePower;