const fetchData = () => {
  const input = document.querySelector('.form-control');
<<<<<<< HEAD
  let timer = null;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      alert(`Ищем: ${input.value}`);
    }, 1000);
  });
=======
  let timer;

  input.addEventListener('input', () => {

    clearTimeout(timer);
    timer = setTimeout(() => {
      const searchText = input.value;
      alert(`Ищем: ${searchText}`);
    },1000)
  })
>>>>>>> 05d9327 (07. Task and HomeWork)
};

export default fetchData;
