// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';
const url = 'https://api.thecatapi.com/v1/images/search';
async function setCatGallery(){
    // Начало
    const catImageURLS = [];
    const requests = Array.from({length: 10}, async () => {
     try {
      const response = await axios.get(url);
      const catData = response.data[0];
      if (catData && catData.url) {
       catImageURLS.push(catData.url)
      }
     } catch (error) {
      throw error;
     }
    });
    await Promise.all(requests);
    const mainContainer = document.querySelector('.main__container');
    catImageURLS.forEach(catImageUrl => {
     const imgElement = document.createElement('img');
     imgElement.src = catImageUrl;
     mainContainer.appendChild(imgElement);
    });

    return 'cat gallery is ready!';
    // Конец
}
setCatGallery()
    .then(message => console.log(message))
    .catch(error => console.error(error));

export default setCatGallery;