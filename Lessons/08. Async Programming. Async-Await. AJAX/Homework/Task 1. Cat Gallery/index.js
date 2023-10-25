// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

 import axios from 'axios';

const setCatGallery = async () => {
    // Начало
    const promises = [];
    const mainContainer = document.querySelector('.main__container');

    for (let i = 0; i < 10; i++) {
        promises.push(axios.get('https://api.thecatapi.com/v1/images/search')
            .then((response) => {
                const ImageUrl = response.data[0].url;
                const Image = document.createElement('img');
                Image.setAttribute('src', ImageUrl);
                mainContainer.appendChild(Image);
            })
            .catch((error) =>{
                console.log("Ошибка", error);
            }))
    }
    try {
        await Promise.all(promises)
        return 'cat gallery is ready!'
    } catch (error) {
        console.log('Ошибка 2')
        return 'cat gallery is not ready!'
    }
    // Конец
};

export default setCatGallery;