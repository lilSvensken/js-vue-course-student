// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

//import axios from 'axios';
const setCatGallery = () => {
    const main = document.querySelector('.main__container');
    for (let i = 0; i < 10; i++) {
        fetch('https://api.thecatapi.com/v1/images/search', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.forEach((cat) => {
                    const img = document.createElement('img');
                    img.src = cat.url;
                    main.appendChild(img);
                });
                console.log('cat gallery is ready!');
            })
            .catch((error) => {
                console.error(error)
            });
    }

};
export default setCatGallery;