const isTicketHappy = (num) => {
    let str = num + "";
    let sum1 = 0, sum2 = 0;
    for(let i = 0; i < str.length; i++){
        if(i < str.length/2){
            sum1 += Number(str[i]);
        }
        else{
            sum2 += Number(str[i]);
        }
    }
    return sum1 === sum2;
};
export default isTicketHappy;