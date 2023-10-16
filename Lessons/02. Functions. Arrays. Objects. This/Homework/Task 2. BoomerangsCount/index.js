const getBoomerangsCount = (numbers) => {
    if (numbers.length<3){
        return 0;
    }
    let count = 0;
    for (let i = 1; i<numbers.length-1; i++){
        if (numbers[i-1] === numbers[i+1] && numbers[i]!==numbers[i-1]){
            count++;
        }
    }
    return count;
};

export default getBoomerangsCount;