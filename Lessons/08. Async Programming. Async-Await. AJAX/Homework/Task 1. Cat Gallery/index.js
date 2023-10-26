// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов
import fetch from "node-fetch";
// import axios from 'axios';

const setCatGallery = () => {
    const container = document.querySelector('.main__container');
    const catUrl = 'https://api.thecatapi.com/v1/images/search';
    const getAndInsertCatPicture = async () => {
        let response = await fetch(catUrl);
        let result = await response.json();
        return result[0];

    }

    let promis = Promise.all([getAndInsertCatPicture(), getAndInsertCatPicture(), getAndInsertCatPicture(), getAndInsertCatPicture(), getAndInsertCatPicture(), getAndInsertCatPicture(), getAndInsertCatPicture(), getAndInsertCatPicture(), getAndInsertCatPicture(), getAndInsertCatPicture()]);
    let p = promis.then((result1) => {
        for (let i of result1){
            let img = document.createElement('img');
            img.src = i.url;
            container.append(img);
        }
        return 'cat gallery is ready!';
    });
    return p;
};

export default setCatGallery;