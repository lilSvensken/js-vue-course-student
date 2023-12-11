const getBudget = (people) => {
  return people.reduce((a, b) => {
    return a + b.budget
  }, 0)
}

export default getBudget
