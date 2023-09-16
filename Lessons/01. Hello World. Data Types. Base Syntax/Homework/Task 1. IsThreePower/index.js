const isThreePower = (num) => {
    for(let i = 0; i < 10; i++){
        if (3**i == num) return true;
    }
};
export default isThreePower;