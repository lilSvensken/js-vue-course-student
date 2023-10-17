const fetchData = () => {
  const input = document.querySelector('.form-control');
  let timer;

  input.addEventListener('input', () => {

    clearTimeout(timer);
    timer = setTimeout(() => {
      const searchText = input.value;
      alert(`Ищем: ${searchText}`);
    },1000)
  })
};

export default fetchData;
