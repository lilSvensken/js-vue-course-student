const isSequenceContinuous = (numbers) => {
  let flag = true
  if (numbers.length < 2) {
    flag = false
  } else {
    for (let i = 1; i < numbers.length - 1; i++) {
      if (numbers[i] != numbers[i - 1] + 1) {
        flag = false
      }
    }
  }
  return flag
}
export default isSequenceContinuous
