import axios from 'axios';

const setCatGallery = async () => {
    const mainContainer = document.querySelector('.main__container');

    const catPromises = [];

    // Отправляем 10 запросов на получение фотографий котов
    for (let i = 0; i < 10; i++) {
        catPromises.push(axios.get('https://api.thecatapi.com/v1/images/search')
            .then((response) => {
                const catImageUrl = response.data[0].url;
                const catImage = document.createElement('img');
                catImage.setAttribute('src', catImageUrl);
                mainContainer.appendChild(catImage);
            })
            .catch((error) => {
                console.error('Ошибка при получении фотографии кота:', error);
            }));
    }

    try {
        // Ждем, пока выполнится каждый промис
        await Promise.all(catPromises);
        return 'cat gallery is ready!';
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return 'cat gallery is not ready';
    }
};

export default setCatGallery;
