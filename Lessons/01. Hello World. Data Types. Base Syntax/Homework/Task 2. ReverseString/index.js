const reverseString = (str) => {
  const str1 = str + ' '
  let len = str.length
  let rez = ''
  while (rez.length != str.length) {
    rez = rez + str1.slice(len - 1, len)
    len = len - 1
  }
  return rez
}

export default reverseString
