// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = () => {
    // Начало
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
    const numberOfRequests = 10;
    const requests = Array.from({ length: numberOfRequests }, () => axios.get(apiUrl));

    return Promise.all(requests)
        .then((responses) => {
            const imagesUrls = responses.map((response) => response.data[0].url);
            const container = document.querySelector('.main__container');

            imagesUrls.forEach((imageUrl) => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                container.appendChild(imgElement);
            });

            return 'cat gallery is ready!';
        })
        .catch((error) => {
            console.error(error);
        });

    // Конец
};

export default setCatGallery;