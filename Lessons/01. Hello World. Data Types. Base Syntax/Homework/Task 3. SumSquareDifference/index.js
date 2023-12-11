const sumSquareDifference = (num) => {
  let sumkv = 0
  let kvsum = 0
  let i = 0
  if (num < 0) {
    num = -num
  }
  while (i <= num) {
    kvsum = kvsum + i
    sumkv = sumkv + i ** 2
    i = i + 1
  }
  kvsum = kvsum ** 2
  return (kvsum - sumkv)
}

export default sumSquareDifference
