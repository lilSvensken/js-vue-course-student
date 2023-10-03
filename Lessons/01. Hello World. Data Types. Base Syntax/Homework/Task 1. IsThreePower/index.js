const isThreePower = (num) => {
    // Начало
if ( n > 0) {
for ( let a = 0; a<= Math.sqrt(n); a++){
if (Math.pow ( 3, a) === n){
return true;
}
}
return false;
}else {
return false;
}
    // Конец
};

export default isThreePower;