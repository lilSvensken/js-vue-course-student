const fetchData = () => {
  const input = document.querySelector('.form-control')
  let timer = null
  input.addEventListener('input', () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      alert(`Ищем: ${input.value}`)
    }, 1000)
  })
}

export default fetchData
