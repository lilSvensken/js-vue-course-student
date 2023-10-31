// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

// import axios from 'axios';

const setCatGallery = () => {
    // Начало
    const container = document.querySelector('.main__container');

    // Функция для отправки запроса и добавления картинки на страницу
    const fetchCatImage = () => {
        return axios.get('https://api.thecatapi.com/v1/images/search')
            .then((response) => {
                const imageUrl = response.data[0].url;
                const catImage = document.createElement('img');
                catImage.src = imageUrl;
                container.appendChild(catImage);
            });
    };

    // Создаем массив промисов для 10 запросов
    const promises = Array.from({ length: 10 }, () => fetchCatImage());

    // Используем Promise.all для ожидания завершения всех запросов
    return Promise.all(promises)
        .then(() => {
            return 'cat gallery is ready!';
        });
    // Конец
};

export default setCatGallery;