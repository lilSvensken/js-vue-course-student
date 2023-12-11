const getBoomerangsCount = (numbers) => {
  let boomerangs = 0
  if (numbers.length > 2) {
    for (let i = 0; i < numbers.length - 2; i++) {
      if (numbers[i] == numbers[i + 2] && numbers[i] != numbers[i + 1]) {
        boomerangs++
      }
    }
  }
  return boomerangs
}
export default getBoomerangsCount
