const moreFunction = (number) => {
    return function (arr){
      return arr.map(item => item / number)
    }
  };
  