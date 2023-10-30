import * as WatchJS from '../../helpers/melanke-watchjs.js';

const setNewsMaker = () => {
    const addNewsButton = document.querySelector("button");
    const newsInput = document.querySelector('input');
    const newsContainer = document.querySelector(".news__container")

    // Начало
    const state = {
        latestNews: {
            text: "",
            date: ""
        }
    };

    function watchState(state){
        watch(state, 'text', () => {
            if(state.text === ''){
                newsInput.value = state.text
            }else{
                const card = document.createElement("div")
                card.classList.add("news__news-element")

                const cardDate = document.createElement("h5")
                cardDate.textContent = state.date

                const cardText = document.createElement("div")
                cardText.textContent = state.text

                card.append(cardDate, cardText)

                newsContainer.prepend(card)
                state.text = ""
                state.date = ""
            }
        })
    }

    addNewsButton.addEventListener('click', () => {
        state.text = newsInput.value;
        state.date = new Date().toLocaleString();
    });

    watchState(state)
    // Конец
};

export default setNewsMaker;
