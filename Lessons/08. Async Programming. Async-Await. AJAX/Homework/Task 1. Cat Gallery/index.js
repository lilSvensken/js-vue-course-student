// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = () => {
    const container = document.querySelector(".main__container");
    container.innerHTML="";
    const requests=[];

    for(let i =0; i<10;i++){
        const request = axios.get('https://api.thecatapi.com/v1/images/search')
            .then(responce=>{
                const catImageUrl = responce.data[0].url;
                const catImg = document.createElement("img");
                catImg.src = catImageUrl;
                container.append(catImg)
            });
        requests.push(request)

    }
    return Promise.all(requests)
        .then(() => console.log("cat gallery is ready!"));

};

export default setCatGallery;