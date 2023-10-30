// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const BASE_URL = "https://api.thecatapi.com/v1/images/search"
const setCatGallery = () => {
    // Начало
    const mainContainer = document.querySelector('.main__container')
    let picturesCats = []
    for (let i = 0; i < 10; i++){
        picturesCats[i] = (axios.get(BASE_URL))
    }
    return Promise.all(picturesCats)
        .then((data) => {
            data.forEach((object) => {
                const img = document.createElement('img')
                img.src = object.data[0].url
                mainContainer.append(img)
            })
            return `cat gallery is ready!`
        })
        .catch((error) => {
            console.log(error)
        })
    // Конец
};

export default setCatGallery;