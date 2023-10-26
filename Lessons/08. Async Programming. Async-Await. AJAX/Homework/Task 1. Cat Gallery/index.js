// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

// import axios from 'axios';

import axios from "axios";

const setCatGallery = () => {
    // Начало
    return new Promise((resolve, reject) => {
        const container = document.querySelector('.main__container');
        const requests = [];

        for (let i = 0; i < 10; i++) {
            requests.push(axios.get('https://api.thecatapi.com/v1/images/search'));
        }

        Promise.all(requests)
            .then((responses) => {
                responses.forEach((response) => {
                    const catUrl = response.data[0].url;
                    const catImg = document.createElement('img');
                    catImg.src = catUrl;
                    container.appendChild(catImg);
                });
                resolve('cat gallery is ready!');
            })
            .catch((error) => {
                reject(error);
            });
    });
    // Конец
};

export default setCatGallery;