const changeCase = (str) => {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    const symbol = str[i]
    const isUpperSymbol = symbol.toUpperCase() === symbol
    result += isUpperSymbol ? symbol.toLowerCase() : symbol.toUpperCase()
  }

  return result
}

export default changeCase
