// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

// import axios from 'axios';



 const setCatGallery = () => {
    // Начало
    const container = document.querySelector('.main__container')
    const url = 'https://api.thecatapi.com/v1/images/search'

    return new Promise((resolve, reject) => {
        const requestArray = []

        for (let i = 0; i < 10; i++) {
            requestArray.push(fetch(url)
                .then(response => response.json())
                .then(data => {
                    let dataUrl = data[0].url
                    const img = document.createElement('img')
                    img.src = dataUrl
                    container.appendChild(img)
                })
                .catch(err => reject(err))
            )
        }

        Promise.all(requestArray)
            .then(() => resolve('cat gallery is ready!'))
            .catch(err => reject(err))
    })
    // Конец
};

// setCatGallery().then((text) => {
//     console.log(text); // cat gallery is ready!
// })

export default setCatGallery;