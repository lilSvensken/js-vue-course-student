const createButton = () => {
    // Начало
    const container = document.body.querySelector('.button-container');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Button';
    container.append(button);
    button.addEventListener('click', () => {
        const description = document.querySelector('.description');
        const textSpan = document.createElement('span');
        textSpan.textContent = 'Text inserted!';
        description.append(textSpan);
    });
    // Конец
};

export default createButton;