// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

// import axios from 'axios';

const setCatGallery = () => {
    const main_container = document.querySelector('.main__container');
    for(let i = 0; i < 10; i++){
        const image = document.createElement('img');
        fetch('https://api.thecatapi.com/v1/images/search')
            .then((data) => data.json())
            .then((data) => image.src = data[0].url)
        main_container.append(image);
    }
};

export default setCatGallery;