const createButton = () => {
    // Начало
    const container = document.body.querySelector('.button-container');
    const button = document.createElement('button');
    button.textContent = 'Кнопка';
    button.classList.add('btn','btn-primary');
    container.append(button);

    button.addEventListener('click',() => {
        const description = document.querySelector('.description');
        const  textSpan = document.createElement('span');
        textSpan.textContent = 'Текст вставлен!'
        description.appendChild(textSpan);
    });

    // Конец
};

export default createButton;