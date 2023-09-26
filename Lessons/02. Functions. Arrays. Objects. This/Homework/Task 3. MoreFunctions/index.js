const moreFunction = (number) => {
    return (array) => {
      return array.map((num)=>{
        return num / number;
      });
    }
  };

export default moreFunction;