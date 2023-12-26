import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    // Начало
    const model = {
        newsList: [],
    };

    const view = {
        newsInput: document.querySelector('.form-control'),
        createButton: document.querySelector('.btn.btn-primary'),
        newsContainer: document.querySelector('.news__container'),

        renderNews: () => {
            view.newsContainer.innerHTML = '';
            model.newsList.forEach((news) => {
                const newsElement = document.createElement('div');
                newsElement.classList.add('news__news-element');

                const dateElement = document.createElement('h5');
                dateElement.textContent = new Date().toLocaleString();
                newsElement.appendChild(dateElement);

                const textElement = document.createElement('div');
                textElement.textContent = news;
                newsElement.appendChild(textElement);

                view.newsContainer.appendChild(newsElement);
            });
        },

        clearInput: () => {
            view.newsInput.value = '';
        },
    };

    const controller = {
        init: () => {
            view.createButton.addEventListener('click', controller.handleCreateNews);
        },

        handleCreateNews: () => {
            const newsText = view.newsInput.value.trim();
            if (newsText) {
                model.newsList.unshift(newsText);
                view.renderNews();
                view.clearInput();
            }
        },
    };

    controller.init();
    // Конец
};

export default setNewsMaker;
