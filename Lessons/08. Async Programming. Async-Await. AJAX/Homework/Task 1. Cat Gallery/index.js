// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

 import axios from 'axios';


const setCatGallery = () => {
    // Начало
    const main = document.querySelector('.main__container');
    let arrUrls = []
    for(let i = 0; i < 10; i++){
        arrUrls.push(axios.get('https://api.thecatapi.com/v1/images/search'));
    }

    return Promise.all(arrUrls)
        .then((urls) => {
            urls.forEach((url) => {
                const image = document.createElement('img')
                image.src = url.data[0].url
                main.append(image)
            });
            return 'cat gallery is ready!';
        })
        .catch((e) => {
            console.log(e);
        })
    // Конец
};

export default setCatGallery;