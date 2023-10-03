const isSequenceContinuous = (numbers) => {
    let scr = true;
    if ( num.length > 1 )
    {
    for(let a = 0; a < num.length - 1 ; a++){
    if(num[a+1] - num[a]=== 1){
      scr = true;
    }
    else
    {
      scr = false;
      break;
    }
    }
    }
    else{
    scr = false;
    }
    return scr;
};

export default isSequenceContinuous;