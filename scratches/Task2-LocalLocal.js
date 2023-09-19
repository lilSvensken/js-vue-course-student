const LocalLocal = (begin, end) => {

};
function LocalLocal(begin, end) {
  for (let i = begin; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("LocalLocal");
    } else if (i % 3 === 0) {
      console.log("Local");
    } else if (i % 5 === 0) {
      console.log("Local");
    } else {
      console.log(i);
    }
  }
}

LocalLocal(11, 20);
