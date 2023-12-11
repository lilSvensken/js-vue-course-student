const fetchData = () => {
  const input = document.querySelector('.form-control');
<<<<<<< HEAD
<<<<<<< HEAD
  let timer = null;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      alert(`Ищем: ${input.value}`);
    }, 1000);
  });
=======
=======
>>>>>>> 4f6d6ed49eae54292cdd261c11eecc0860116623
  let timer;

  input.addEventListener('input', () => {

    clearTimeout(timer);
    timer = setTimeout(() => {
      const searchText = input.value;
      alert(`Ищем: ${searchText}`);
    },1000)
  })
<<<<<<< HEAD
>>>>>>> 05d9327 (07. Task and HomeWork)
=======
>>>>>>> 4f6d6ed49eae54292cdd261c11eecc0860116623
};

export default fetchData;
