const getBoomerangsCount = (numbers) => {
    // Начало
    let cont = 0;
    for ( let a = 1; a< num.length; a++){
       if ( num[a-1] === num[a+1] && num[a] !== num[a-1])
       {
       cont += 1;
       }
    }
    return cont;
    // Конец
};

export default getBoomerangsCount;