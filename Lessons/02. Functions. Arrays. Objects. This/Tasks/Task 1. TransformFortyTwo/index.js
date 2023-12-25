const transformFortyTwo = (number) => {
  return number.map(num => {
    if(num%42===0){
      return "forty two!";
    }else{
      return num
    }
  })
};

export default transformFortyTwo;