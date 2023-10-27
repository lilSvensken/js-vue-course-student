import axios from 'axios';

const setCatGallery = () => {
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
};

export default setCatGallery;
